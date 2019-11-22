import React from 'react';
import { Text, View, TextInput, StyleSheet, Image, FlatList, Alert, Keyboard } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button } from "react-native-elements";
import { urlApi } from '../../constants';
import escalier from './images/escalier.jpg';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			artist: ''
		};
	}

	// Enregistrer un titre dans la BDD
	addTrack() {
		let user_id = this.props.loggedUser.id;
		const { title, artist } = this.state;
		Keyboard.dismiss();
		fetch(`${urlApi}/users/title`, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({ title, artist, user_id }),
		})
			.then(res => {
				res.json()
				if (res.status === 201) {
					Alert.alert('Titre ajouté avec succès', '', [
						{
							text: 'OK',
							onPress: () => {
								fetch(`${urlApi}/users/${user_id}/tracks`)
									.then(response => response.json())
									.then(data => {
										this.props.playlistFetched(data);
									})
									.catch(error => this.props.playlistFetchError(error));
								this.props.navigation.navigate('MyPlaylist')
							}
						}])
				}
			})
	}

	render() {
		return (
			<View style={styles.container} >
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				<Text style={styles.title}>Ajouter un morceau</Text>
				<TextInput
					style={styles.signin}
					placeholder="Titre"
					value={this.state.title}
					onChangeText={(title) => this.setState({ title })}
				/>

				<TextInput
					style={styles.signin}
					placeholder="Artiste"
					value={this.state.artist}
					onChangeText={(artist) => this.setState({ artist })}
				/>
				<Button
					buttonStyle={styles.button}
					title="Enregistrez ce titre"
					onPress={() => this.addTrack()}
				/>
			</View>

		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	signin: {
		backgroundColor: "#2f55a4",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(24),
		marginTop: scale(24),
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
	itemText: {
		textAlign: "center",
		fontSize: 15,
		color: "#2f55a4"
	},
});
export default Title;
