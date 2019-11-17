

import React from 'react';
import { Text, View, TextInput, StyleSheet, Image, FlatList, Alert, Keyboard } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button } from "react-native-elements";
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			artist: "",
			numberoftrack: 0,
			count: 0,
			tracks:"",
			user_id: null
		}
	}

	// Ajouter 1 au compteur
	addNumberOfTrack() {
		this.setState({
			numberoftrack: this.state.numberoftrack + 1
		})
	}
	addCount() {
		this.setState({
			count: this.state.count + 1
		})
	}

	// Enregistrer un titre dans la BDD

	fetchTitle() {
		let user_id = this.props.loggedUser.id;
		const { title, artist, numberoftrack } = this.state;
		Keyboard.dismiss();
		fetch(`${urlApi}/users/title`, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({title, artist, user_id, numberoftrack}),
		})
			.then(res => {
				res.json()
				if (res.status === 201) {
					Alert.alert('Titre ajouté avec succès','',[{text:'OK', onPress: () => this.componentDidMount()}])
				}
			})
	}

	onPressButton() {
		this.addCount();
		this.addNumberOfTrack();
		this.fetchTitle();
		// this.componentDidMount();
	}
	goToHomeAfterLogin() {
		const { navigate } = this.props.navigation;
		navigate('FetchPlaylist')
	}

	async componentDidMount() {

		console.log(this.state);
		
		let id = this.props.loggedUser.id;
		try {
			const response = await fetch(`${urlApi}/users/${id}/tracks`);
			const data = await response.json();
			this.setState({
				numberoftrack: data.length,
				count: data.length + 1,
				tracks: data,
				user_id: id
			});
		}
		catch (error) {
			console.error(error);
		}
	}

	render() {
		console.log(this.state);
		
		const { title, artist, numberoftrack, tracks } = this.state;
		return (
			<View style={styles.container} >
				<Image source={escalier} style={styles.mark} resizeMode="cover" />
				
				{this.state.count === 0 &&
					<View>
						<Text style={styles.title}>Vous n'avez enregistré aucun titre</Text>
						<Button
							buttonStyle={styles.button}
							title="Commencer"
							onPress={() => this.addCount()}
						/>
					</View>}
				{this.state.count > 0 && this.state.count < 11 &&
					<View>
						<Text style={styles.title}>Vous avez enregistré {numberoftrack} titre(s)</Text>
						<TextInput
							style={styles.signin}
							placeholder="Titre"
							value={title}
							onChangeText={(title) => this.setState({ title })}
						/>

						<TextInput
							style={styles.signin}
							placeholder="Artiste"
							value={artist}
							onChangeText={(artist) => this.setState({ artist })}
						/>
						<Button
							buttonStyle={styles.button}
							title="Enregistrez ce titre"
							onPress={() => this.onPressButton()}
						/>
						<FlatList
							data={tracks}
							keyExtractor={(index) => {index.toString()}}
							renderItem={({ item }) => {
								return (
									<View>
										<Text style={styles.itemText}> Artiste:{item.artist} / Titre: {item.title}</Text>
									</View>
								)
							}}
						/>
					</View>
				}
				{this.state.count === 11 &&
					<View>
						<Text style={styles.title}>Vous avez enregistrés tous vos titres</Text>
						
						<FlatList
							data={tracks}
							keyExtractor={(index) => {index.toString()}}
							renderItem={({ item }) => {
								return (
									<View>
										<Text style={styles.itemText}> Artiste:{item.artist} / Titre: {item.title}</Text>
									</View>
								)
							}}
						/>
						<Button
							buttonStyle={styles.button}
							title="Continuer"
							onPress={() => this.goToHomeAfterLogin()}
						/>
					</View>

				}

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
		marginTop: 25
	},
	itemText: {
		textAlign: "center",
		fontSize: 15,
		color: "#2f55a4"
	},
});
export default Title;
