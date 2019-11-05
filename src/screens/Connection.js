
import React from 'react';
import { View, TextInput, StyleSheet, AsyncStorage, Keyboard, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from "react-native-elements";
import userLogin from '../actions/user';
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';


class Connection extends React.Component {
	// static navigationOptions = {
	//     header: null,
	// };
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			// isLoading: true,
			// isConnected: true,	
		}
	}


	goToPlayList() {
		const { navigate } = this.props.navigation;
		navigate('FetchPlaylist');
	}

	componentDidMount() {

		const token = AsyncStorage.getItem('token');
		console.log(token);
	}
	handleSubmit = async () => {
		const { userLogin } = this.props;
		Keyboard.dismiss();

		await fetch(`${urlApi}/auth/signin`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(this.state),
		})
			.then(res => {
				if (res.status === 401) {
					alert('Erreur d\'authentification');
				} else if (res.status === 200) {
					return res.json();
				}
			})
			.then((user) => {
				if (user !== undefined) {
					AsyncStorage.setItem('token', user.token);
					AsyncStorage.setItem('email', user.email);
					this.goToPlayList();
				}
			})
		}
	render() {
		return (
			<View style={styles.container}>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<View style={styles.container2}>

					<TextInput style={styles.signup}
						placeholder="email"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					>
					</TextInput>

					<TextInput style={styles.signup}
						placeholder="password"
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
					>
					</TextInput>

					<TouchableOpacity>
						<Button
							buttonStyle={styles.button}
							title="Se connecter"
							onPress={this.handleSubmit}
						// onPress={this.goToPlayList()}
						/>
					</TouchableOpacity>
				</View>
			</View >
		);
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: "grey",
		flex: 1
	},

	container2: {
		flex: 1,
		justifyContent: "flex-start"
	},

	signup: {
		backgroundColor: "#0099ff",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(24),
		marginTop: scale(24)
	},

	textinput: {
		marginLeft: 5,
		marginRight: 5,
		height: 50,
		borderColor: '#000000',
		borderWidth: 1,
		paddingLeft: 5,
		borderRadius: 25

	},
	button: {
		backgroundColor: "#0099ff",
		marginLeft: scale(50),
		marginRight: scale(50),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginTop: scale(24)
	},
	mark: {
		position: "absolute",
		width: "100%",
		height: "100%"
	},
});

const mdtp = dispatch => bindActionCreators({ userLogin }, dispatch);

export default connect(null, mdtp)(Connection);
