
import React from 'react';
import { View, Dimensions, Image, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import escalier from './images/escalier.jpg';

const { width } = Dimensions.get("window");


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	goToRegister() {
		const { navigate } = this.props.navigation;
		navigate('Register');
	}

	goToConnection() {
		const { navigate } = this.props.navigation;
		navigate('Connection');
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.titlehome}>My Funeral Playlist</Text>
				<View style={styles.container2}>
					<TouchableOpacity>
						<Button
							buttonStyle={styles.signin}
							onPress={() => { this.goToRegister(); }}
							title="S' inscrire"
							titleStyle={styles.signinText}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { this.goToConnection() }}>
						<Text style={styles.signup}>Déjà enregistré, SE CONNECTER</Text>
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
		fontSize: 30,
		marginTop: 50
	},

	signup: {

		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(12),
		textAlign: "center"
	},
	signin: {
		backgroundColor: "#0099ff",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(12)
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