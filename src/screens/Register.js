
import React from 'react';

import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
// import noInternetStyles from "../../styles/noInternet.style";
// import {StackActions} from "react-navigation";

import { scale } from 'react-native-size-matters';
import { urlApi } from '../Config/constants';



class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			name: "",
			firstname: "",
			password: "",
			// verifypassword: "",
			email: "",



		};

	}
	goToCreatePlayList() {
		const { navigate } = this.props.navigation;
		navigate('CreatePlayList');
	}
	// onChangeText = (key, val) => {
	// 	this.setState({ [key]: val })
	// }


	async handleSubmit() {
		await fetch(`${urlApi}/auth/signup`, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify(this.state),

		})
			.then(res => res.json())
			.then((user) => {
				if (user.Created)
					this.goToCreatePlayList();
			})


	}

	render() {

		return (
			
				//  <View style={styles.container}> 
				<KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
				<View style={styles.container2}>
					<TextInput style={styles.signup}
						placeholder="email"
						onChangeText={(email) => this.setState({ email })}
						value={this.state.email}
					>
					</TextInput>

					<TextInput style={styles.signup}
						placeholder="password"
						onChangeText={(password) => this.setState({ password })}
						value={this.state.password}
					>
					</TextInput>

					{/* <TextInput style={styles.signup}
						placeholder="verifypassword"
						onChangeText={() => this.setState()}
						value={this.state.verifypassword}
					>
					</TextInput> */}
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

					<TouchableOpacity>
						<Button
							buttonStyle={styles.button}
							onPress={this.handleSubmit}
							title="S' enregistrer"
							titleStyle={styles.signinText}
						/>
					</TouchableOpacity>
				</View>
				</KeyboardAvoidingView>
				//  </View> 
			
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
		justifyContent: "space-around"
	},

	signup: {
		backgroundColor: "#0099ff",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(24)
	},

	textinput: {
		marginLeft: 5,
		marginRight: 5,
		height: 50,
		borderColor: '#000000',
		borderWidth: 1,
		paddingLeft: 5
	},
	button: {
		backgroundColor: "#0099ff",
		marginLeft: scale(50),
		marginRight: scale(50),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 0


	}
});

export default Register;