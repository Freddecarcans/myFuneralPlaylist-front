
import React from 'react';
import { View, Dimensions, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import {ActivityIndicator, Animated, AppState, Alert, Dimensions, KeyboardAvoidingView, Linking, NetInfo, TouchableOpacity} from "react-native";
import { Button } from "react-native-elements";
// import Config from "react-native-config";
// import {Dropdown} from "react-native-material-dropdown";
// import {TextField} from "react-native-material-textfield";
// import MaterialIcon from "react-native-vector-icons/MaterialIcons";
// import {CheckBox} from "react-native-elements";
// import noInternetStyles from "../../styles/noInternet.style";
// import {StackActions} from "react-navigation";
import { scale } from 'react-native-size-matters';
import escalier from './images/escalier.jpg';

const { width } = Dimensions.get("window");
// const escalier = require('./images/escalier.jpg');


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
				{/* { this.state.isLoading &&
				<ActivityIndicator style={styles.signinLoader} size="large" color="#50bcb8" />
				 }
			 {!this.state.isLoading && this.state.isConnected && !this.state.isMaintenance &&  */}
				<Text style={styles.titlehome}>My Funeral Playlist</Text>
				<View style={styles.container2}>
					<TouchableOpacity>
						<Button
							buttonStyle={styles.signup}
							onPress={() => { this.goToRegister(); }}
							title="    S'inscrire    "
							titleStyle={styles.signupText}
						/>
					</TouchableOpacity>

					<TouchableOpacity>
						<Button
							buttonStyle={styles.signin}
							onPress={() => { this.goToConnection(); }}
							title="Se connecter"
							titleStyle={styles.signinText}
						/>
					</TouchableOpacity>
					{/* <Button
						buttonStyle={styles.signup}
						onPress={() => {}}
						title="Continuer avec Facebook"
						titleStyle={[styles.signupText ]}
					/> */}
				</View>

				{/* {!this.state.isLoading && !this.state.isConnected &&
			<View  style={styles.maintenance}>
				<Text style={styles.maintenanceText}>Pas de connexion internet</Text>
			</View>
			}
			{!this.state.isLoading && this.state.isConnected && this.state.isMaintenance &&
			<View  style={styles.maintenance}>
				<Text style={styles.maintenanceText}>Maintenance en cours</Text>
				<Text style={styles.maintenanceText}>Veuillez réessayer ultérieurement</Text>
			</View>
			} */}
			</View>
		);
	}

}

// EStyleSheet.build(styles);

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
		fontSize: 30
	},

	signup: {
		backgroundColor: "#0099ff",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(12),
		borderColor: "black"
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
	facebook: {
		backgroundColor: "#4267b2",
		marginTop: scale(8),
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(12)
	},
	signupText: {
		color: "#FFF",
		fontSize: 15
	},
	signinText: {
		textAlign: 'center',
		color: "#FFF",
		fontSize: 15
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