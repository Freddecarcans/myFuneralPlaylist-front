
import React from 'react';

import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Image, Keyboard, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scale } from 'react-native-size-matters';
import  userLogged from '../actions/auth.action';
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';


class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			password: "",
			verifypassword: "",
			email: "",
			name: "",
			firstname:"",
		};
	}

	goToMyContacts() {
		this.props.navigation.navigate('MyContacts');
	}
	
	handleSubmit() {	
		const { email, password, name, firstname, contactA, contactB } = this.state;

		Keyboard.dismiss();

		if (this.state.password.length< 6) {
			Alert.alert('Erreur mot de passe','Le mot de passe doit contenir au moins 6 caractères')
		}
		else if (this.state.password !== this.state.verifypassword) {
			Alert.alert('Erreur mot de passe', 'Les mots de passe ne sont pas identiques', [{ text: 'OK' }])
		} else {
			fetch(`${urlApi}/auth/signup`, {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
					'Accept': 'application/json'
				}),
				body: JSON.stringify({ email, password, name, firstname, contactA, contactB }),

			})
				.then(res => {
					res.json()
					if (res.status === 201) {
						Alert.alert('Compte créé avec succès',
						'Enregistrez vos contacts',
						[{text:"OK", onPress: () =>  this.goToMyContacts()}])
						this.getUserInfo();
						
					}
				})
		}
	}
	
	getUserInfo = async () => {
		console.log('coucou');
		
		const { userLogged } = this.props;
		const { email, password } = this.state;

		await fetch(`${urlApi}/auth/signin`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({email, password}),
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
		const {email} = this.props.navigation.state.params.email;
		
		return (
			
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.title}>Créer un compte</Text>
				<View>
					<Text style={styles.textemail}>Email saisi : {email} </Text>

					<TextInput style={styles.signup}
						placeholder="Veuillez ressaisir votre email"
						onChangeText={(email) => this.setState({email})}
						value={this.state.email}
					>
					</TextInput>

					<TextInput style={styles.signup}
						placeholder="password"
						onChangeText={(password) => this.setState({ password })}
						value={this.state.password}
					>
					</TextInput>

					<TextInput style={styles.signup}
						placeholder="verifypassword"
						onChangeText={(verifypassword) => this.setState({ verifypassword })}
						value={this.state.verifypassword}
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

					<TouchableOpacity>
						<Button
							buttonStyle={styles.button}
							onPress={this.handleSubmit.bind(this)}
							title="S' enregistrer"
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
		marginBottom: 10,
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
		// marginBottom: 0
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
	},
	textemail: {
		marginLeft: scale(24),
		fontSize: 15,
		color: "#ffffff",

	}
});
const mdtp = dispatch => bindActionCreators({ userLogged }, dispatch);
export default connect(mdtp, null)(Register);
