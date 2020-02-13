import React from 'react';
import { View, Dimensions, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { urlApi } from '../../constants';
import escalier from './images/escalier.jpg';

const { width } = Dimensions.get("window");

class HomeAfterLogin extends React.Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	goToPlayList() {
		const { navigate } = this.props.navigation;
		navigate('MyPlaylist');
	}
	goToMyAccount() {
		const { navigate } = this.props.navigation;
		navigate('MyAccount');
	}
	goToMyContacts() {
		const { navigate } = this.props.navigation;
		navigate('MyContacts')
	}
	async componentDidMount() {
		const id = this.props.loggedUser.id;
		const token = this.props.loggedUser.token;
			this.props.fetchUserStart();
			// await fetch(`${urlApi}/users/profile/${this.props.loggedUser.id}`)
			await fetch(`${urlApi}/users/profile` , {
				method: 'GET',
				headers: new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token,
					'id': `${id}`
				})
			})
				.then(response => response.json())
				.then(data => {
					this.props.fetchUserSuccess(data);
				})
				.catch((console.error()))
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.titlehome}>My Funeral Playlist</Text>
				<View style={styles.container2}>
					<TouchableOpacity
						style={styles.signup}
						onPress={() => this.goToPlayList()}
					>
						<Text style={styles.signupText}>Ma Playlist</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.signup}
						onPress={() => this.goToMyContacts()}
					>
						<Text style={styles.signupText}>Mes Contacts</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.signup}
						onPress={() => this.goToMyAccount()}
					>
						<Text style={styles.signupText}>Mon Compte</Text>
					</TouchableOpacity>


				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	container2: {
		flex: 1,
		justifyContent: "center"
	},
	titlehome: {
		textAlign: "center",
		color: "white",
		fontSize: 40,
		marginTop: 80
	},

	signin: {

		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(12),
		textAlign: "center",
		fontSize: 15,
		color: "#2f55a4",
		borderRadius: 50,
		borderColor: "#2f55a4",
		borderWidth: 2
	},
	signinText: {
		fontSize: 15,
		color: "#2f55a4"
	},
	signup: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "space-around",
		marginBottom: scale(12),
		borderRadius: 50,

	},
	signupText: {
		fontSize: 20,
		color: "#ffffff"
	},
	mark: {
		position: "absolute",
		width: "100%",
		height: "100%"
	},
	markWrap: {
		marginTop: width / scale(4),
		flex: 1,
		paddingVertical: scale(30),
		justifyContent: "center",
		alignItems: "center"
	}
});
export default HomeAfterLogin;