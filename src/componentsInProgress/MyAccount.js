
import React from 'react';

import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Image, Keyboard, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';

import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';




class MyAccount extends React.Component {
	static navigationOptions = {
		header: null,

	};

	constructor(props) {
		super(props);

		this.state = {
            email: "",
            username:"",
            name:"",
            firstname:"",
            contactA:"",
            contactB:""
		};

	}
	goToCreatePlayList() {
		const { navigate } = this.props.navigation;
		navigate('CreatePlayList');
	}

	async handleSubmit() {
		const { email, password } = this.state;

		Keyboard.dismiss();

		if (this.state.password !== this.state.verifypassword) {
			Alert.alert('Erreur mot de passe', 'Les mots de passe ne sont pas identiques', [{ text: 'OK' }])
		} else {
			await fetch(`${urlApi}/auth/signup`, {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
					'Accept': 'application/json'
				}),
				body: JSON.stringify({ email, password }),

			})
				.then(res => {
					res.json()
					if (res.status === 201) {
						this.goToCreatePlayList();
					}
				})
		}
	}
	

	render() {
		// const { email } = this.props.navigation.state.params.email;
		return (

			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.title}>Créer un compte</Text>
				<View style={styles.container2}>
					<TextInput style={styles.signup}
						placeholder="email"
						// value={email}
					>
					</TextInput>
	
					<TextInput style={styles.signup}
						placeholder="username"
						onChangeText={(username) => this.setState({ username })}
						value={this.state.username}
					>
					</TextInput>

					<TextInput style={styles.signup}
						placeholder="name"
						onChangeText={(name) => this.setState({ name })}
						value={this.state.name}
					>
					</TextInput>

					<TextInput style={styles.signup}
						placeholder="firstname"
						onChangeText={(firstname) => this.setState({ firstname })}
						value={this.state.firstname}
					>
					</TextInput>

                    <TextInput style={styles.signup}
						placeholder="Contact 1"
						onChangeText={(contactA) => this.setState({ contactA })}
						value={this.state.password}
					>
					</TextInput>

					<TextInput style={styles.signup}
						placeholder="Contact 2"
						onChangeText={(contactB) => this.setState({ contactB })}
						value={this.state.verifypassword}
					>
					</TextInput>

					<TouchableOpacity>
						<Button
							buttonStyle={styles.button}
							onPress={this.handleSubmit.bind(this)}
							title="Enregistrer mes informations"
							titleStyle={styles.signinText}
						/>
					</TouchableOpacity>

				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	container2: {
		flex: 1,
	},
	signup: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(14),
		borderRadius: 50,
		paddingLeft: scale(20),
		color: "#ffffff"
	},
	button: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(50),
		marginRight: scale(50),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
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
		marginTop: 25
	}
});

export default MyAccount;
