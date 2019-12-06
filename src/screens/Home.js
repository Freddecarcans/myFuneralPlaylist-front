
import React from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Icon } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import {useNetInfo} from '@react-native-community/netinfo';
import escalier from './images/escalier.jpg';

function Home(props) {
	const netInfo = useNetInfo();
	const goToConnection = () => {
		props.navigation.navigate('Connection');
	}
	const goToEmailScreen = () => {
		props.navigation.navigate('EmailScreen')
	}
		return (
			<View style={styles.container}>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.titlehome}>My Funeral Playlist</Text>
				<Text style={styles.contenu}>L'unique application pour transmettre</Text>
				<Text style={styles.contenu2}>ses dernières volontés musicales</Text>
				{netInfo.isConnected === false && 
				<ActivityIndicator size="large" color="#0000ff" />}
				{netInfo.isConnected === true &&
				<View style={styles.container2}>
					<TouchableOpacity>
						<Button
							buttonStyle={styles.signup}
							onPress={goToEmailScreen}
							title="S' inscrire"
							titleStyle={styles.signupText}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={goToConnection}
						style={styles.signin}
					>
						<Text style={styles.signinText}>Déjà enregistré, SE CONNECTER</Text>
					</TouchableOpacity>

				</View>}
			</View>
		);
	}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "grey",
		flex: 1
	},
	container2: {
		flex: 1,
		justifyContent: "flex-end"
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
		justifyContent: "center",
		marginBottom: scale(12),
		borderRadius: 50
	},
	signupText: {
		fontSize: 20,
	},
	mark: {
		position: "absolute",
		width: "100%",
		height: "100%"
	},
	contenu: {
		color: "#2f55a4",
		fontSize: 20,
		textAlign: "center",
		marginTop: 100
	},
	contenu2: {
		color: "#2f55a4",
		fontSize: 20,
		textAlign: "center",
		marginTop: 0
	}
});

export default Home;
