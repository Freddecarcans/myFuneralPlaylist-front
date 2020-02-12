import React from 'react';
import {
	View, Text, TextInput, StyleSheet,
	KeyboardAvoidingView, Image, Keyboard, Alert
} from 'react-native';
import { Button, Icon } from "react-native-elements";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { urlApi } from '../../constants';
import escalier from './images/escalier.jpg';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: this.props.navigation.state.params.email.email,
			password: "",
			verifypassword: "",
			name: "",
			firstname: "",
			adress: "",
			zipcode: "",
			town:""
		};
	}

	goToHomeAfterLogin() {
		this.props.navigation.navigate('HomeAfterLogin');
	}

	handleSubmit = async () => {
		const { email, password, name, firstname, adress, zipcode, town } = this.state;
		Keyboard.dismiss();
		if (this.state.password.length < 6) {
			Alert.alert('Erreur mot de passe', 'Le mot de passe doit contenir au moins 6 caractères')
		}
		else if (this.state.password !== this.state.verifypassword) {
			Alert.alert('Erreur mot de passe', 'Les mots de passe ne sont pas identiques', [{ text: 'OK' }])
		} else {
			await fetch(`${urlApi}/auth/signup`, {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
					'Accept': 'application/json'
				}),
				body: JSON.stringify({ email, password, name, firstname, adress, zipcode, town }),
			})
				.then(res => {
					// res.json()
					if (res.status === 201) {
						this.getUserInfo();
						Alert.alert('Compte créé avec succès',
							'',
							[{ text: "OK", onPress: () => this.goToHomeAfterLogin() }])
					}
				})
		}
	}

	getUserInfo = async () => {
		const { userLogged } = this.props;
		const { email, password } = this.state;

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
			})
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.title}>Créer un compte</Text>
				<Icon name="home" color="#fff"  style={styles.icon} 
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				<ScrollView style={styles.container2}>
					<View>
						<Text style={styles.text}>Email</Text>
						<TextInput style={styles.signup}
							value={this.state.email}
							editable={false}
						>
						</TextInput>
						<Text style={styles.text}>Mot de passe</Text>
						<TextInput style={styles.signup}
							placeholder="Mot de passe"
							secureTextEntry
							onChangeText={(password) => this.setState({ password })}
							value={this.state.password}
						>
						</TextInput>
						<Text style={styles.text}>Vérifier le mot de passe</Text>
						<TextInput style={styles.signup}
							placeholder="Vérifier le mot de passe"
							secureTextEntry
							onChangeText={(verifypassword) => this.setState({ verifypassword })}
							value={this.state.verifypassword}
						>
						</TextInput>
						<Text style={styles.text}>Nom</Text>
						<TextInput style={styles.signup}
							placeholder="Nom"
							onChangeText={(name) => this.setState({ name })}
							value={this.state.name}
						>
						</TextInput>
						<Text style={styles.text}>Prénom</Text>
						<TextInput style={styles.signup}
							placeholder="Prénom"
							onChangeText={(firstname) => this.setState({ firstname })}
							value={this.state.firstname}
						>
						</TextInput>
						<Text style={styles.text}>Adresse</Text>
						<TextInput
							style={styles.signup}
							placeholder="N° et Voie"
							onChangeText={(adress) => this.setState({ adress })}
						/>
						<View style={styles.container3}>
							<TextInput
								style={styles.inputname}
								placeholder="Code postal"
								onChangeText={(zipcode) => this.setState({ zipcode })}
							/>
							<TextInput
								label="Ville"
								style={styles.inputname}
								placeholder="Ville"
								onChangeText={(town) => this.setState({ town })}
							/>
						</View>
						<TouchableOpacity>
							<Button
								buttonStyle={styles.button}
								onPress={this.handleSubmit.bind(this)}
								title="S' enregistrer"
								titleStyle={styles.signinText}
							/>
						</TouchableOpacity>
					</View>
				</ScrollView>
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
	container3: {
		flexDirection: "row",
		justifyContent: "space-around"
	},
	signup: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
		borderRadius: 50,
		paddingLeft: scale(20),
		color: "#ffffff"
	},
	inputname: {
		backgroundColor: "#2f55a4",
		marginRight: 5,
		marginBottom: 5,
		height: 40,
		paddingLeft: scale(20),
		width: "40%",
		borderRadius: 50,
		color: "#ffffff"
	},
	button: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(50),
		marginRight: scale(50),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		marginTop: 25
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
	textemail: {
		marginLeft: scale(24),
		fontSize: 15,
		color: "#ffffff",
	},
	text: {
		marginLeft: scale(50),
		color: "#2f55a4"
	}
});

export default Register;
