import React from 'react';
import {
	View, Text, TextInput, StyleSheet,
	KeyboardAvoidingView, Image, Keyboard, Alert
} from 'react-native';
import { Button, Icon, FormLabel } from 'react-native-elements';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { urlApi } from '../../constants';
import escalier from './images/escalier.jpg';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.user.iduser,
			email: props.user.email,
			name: props.user.name,
			firstname: props.user.firstname,
			adress: props.user.adress,
			zipcode: props.user.zipcode,
			town: props.user.town,
		};
	}

	goToHomeAfterLogin() {
		this.props.navigation.navigate('HomeAfterLogin');
	}

	handleSubmit() {
		const { id, email, name, firstname, adress, zipcode, town } = this.state;
		const token = this.props.loggedUser.token;
		Keyboard.dismiss();

		fetch(`${urlApi}/users/account/${id}`, {
			method: "PUT",
			headers: new Headers({
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Bearer " + token
			}),
			body: JSON.stringify({ email, name, firstname, adress, zipcode, town }),
		})
			.then(res => {
				if (res.status === 201) {
					Alert.alert('Compte modifié avec succès',
						'',
						[{ text: "OK", onPress: () => this.goToHomeAfterLogin() }])
				}
			})
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.title}>Modifier mes informations</Text>
				<Icon name="home" color="#fff" style={styles.icon}
					onPress={() => this.props.navigation.navigate('HomeAfterLogin')}
				/>
				<ScrollView style={styles.container2}>
					<View>
						<Text style={styles.text}>Email</Text>
						<TextInput style={styles.signup}
							placeholder="Email"
							keyboardType="email-address"
							onChangeText={(email) => this.setState({ email })}
							value={this.state.email}
						/>

						<Text style={styles.text}>Nom</Text>
						<TextInput style={styles.signup}
							placeholder="Nom"
							onChangeText={(name) => this.setState({ name })}
							value={this.state.name}
						/>
						<Text style={styles.text}>Prénom</Text>
						<TextInput style={styles.signup}
							placeholder="Prénom"
							onChangeText={(firstname) => this.setState({ firstname })}
							value={this.state.firstname}
						/>
						<Text style={styles.text}>Adresse</Text>
						<TextInput
							style={styles.signin}
							placeholder="N° et Voie"
							value={this.state.adress}
							onChangeText={(adress) => this.setState({ adress })}
						/>
						<View style={styles.container3}>
							<TextInput
								style={styles.inputname}
								placeholder="Code postal"
								value={this.state.zipcode}
								onChangeText={(zipcode) => this.setState({ zipcode })}
							/>
							<TextInput
								label="Ville"
								style={styles.inputname}
								placeholder="Ville"
								value={this.state.town}
								onChangeText={(town) => this.setState({ town })}
							/>
						</View>

						<TouchableOpacity>
							<Button
								buttonStyle={styles.button}
								onPress={this.handleSubmit.bind(this)}
								title="Enregistrer les modifications"
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
	signin: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(20),
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
