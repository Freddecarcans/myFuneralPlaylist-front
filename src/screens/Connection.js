
import React from 'react';
import { View, TextInput, StyleSheet, Keyboard, Image, Text, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from "react-native-elements";
import { urlApi } from '../../constants';
import escalier from './images/escalier.jpg';

class Connection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "exemple3@mail",
			password: "exemple",
		}
	}

	goToHomeAfterLogin() {
		const { navigate } = this.props.navigation;
		navigate('HomeAfterLogin');
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
					Alert.alert('Erreur d\'authentification','Veuillez ressaisir vos identifiants');
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
						placeholder="Email"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					>
					</TextInput>
					<Text style={styles.text}>Mot de passe</Text>
					<TextInput style={styles.signin}
						placeholder="Mot de passe"
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
		justifyContent: "center"
	},
	signin: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(24),
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

export default Connection;
