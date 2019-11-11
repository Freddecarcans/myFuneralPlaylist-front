
import React from 'react';
import { View, Dimensions, Image, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import escalier from './images/escalier.jpg';

const { width } = Dimensions.get("window");


class Home extends React.Component {
	static navigationOptions = {
		header: null,
	};

	goToConnection() {
		const { navigate } = this.props.navigation;
		navigate('Connection');
	}
	goToEmailScreen() {
		const { navigate } = this.props.navigation;
		navigate('EmailScreen')
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.titlehome}>My Funeral Playlist</Text>
				<View style={styles.container2}>
					<TouchableOpacity>
						<Button
							buttonStyle={styles.signup}
							onPress={() => { this.goToEmailScreen() }}
							title="S' inscrire"
							titleStyle={styles.signupText}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { this.goToConnection() }}
						style={styles.signin}
					>
						<Text style={styles.signinText}>Déjà enregistré, SE CONNECTER</Text>
					</TouchableOpacity>

				</View>
			</View>
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
		// color: "#2f55a4",
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
	markWrap: {
		marginTop: width / scale(4),
		flex: 1,
		paddingVertical: scale(30),
		justifyContent: "center",
		alignItems: "center"
	}
});

export default Home;