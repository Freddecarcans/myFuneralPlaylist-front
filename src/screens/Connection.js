
import React from 'react';
import { View, TextInput, StyleSheet, Keyboard, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Header } from "react-native-elements";
import { userLogged } from '../actions/auth.action';
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';


class Connection extends React.Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			email: "pipi@mail.com",
			password: "pipi",
		}
	}


	goToHomeAfterLogin() {
		const { navigate } = this.props.navigation;
		navigate('HomeAfterLogin');
	}

	componentDidMount() {

	}

	handleSubmit = async () => {
		const { userLogged } = this.props;
		const { email, password } = this.state;
		Keyboard.dismiss();

		await fetch(`${urlApi}/auth/signin`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({ email, password }),
		})
			.then(res => {
				if (res.status === 401) {
					alert('Erreur d\'authentification');
				} else if (res.status === 200) {
					return res.json();
				}
			})
			.then((user) => {
				userLogged(user);
				if (user !== undefined) {
					this.goToHomeAfterLogin();
				}
			})
	}
	render() {

		return (
			<View style={styles.container}>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.title}>Connexion</Text>
				<View style={styles.container2}>
					<Text style={styles.text}>Email</Text>
					<TextInput style={styles.signin}
						placeholder="email"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					>
					</TextInput>
					<Text style={styles.text}>Mot de passe</Text>
					<TextInput style={styles.signin}
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

	signin: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(24),
		// marginTop: scale(24),
		borderRadius: 50,
		paddingLeft: scale(20),
		color: "#ffffff"
	},

	textinput: {
		marginLeft: 5,
		marginRight: 5,
		height: 50,
		paddingLeft: 5,

	},
	button: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(50),
		marginRight: scale(50),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginTop: scale(24),
		borderRadius: 50
	},
	mark: {
		position: "absolute",
		width: "100%",
		height: "100%"
	},
	title: {
		fontSize: 25,
		textAlign: "center",
		color: "#ffffff",
		marginTop: 50
	},
	text: {
		color: "#0059b3",
		marginLeft: scale(50)
	}
});

const mdtp = dispatch => bindActionCreators({ userLogged }, dispatch);

export default connect(null, mdtp)(Connection);
