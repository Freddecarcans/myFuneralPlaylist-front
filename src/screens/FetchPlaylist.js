import React from 'react';
import {
  FlatList, ActivityIndicator, Text, View,
  TouchableOpacity, StyleSheet, Image, Alert
} from 'react-native';
import { Button } from "react-native-elements";
import { scale } from 'react-native-size-matters';
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';

export default class FetchPlaylist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = this.props.loggedUser.id
    try {
      this.props.playlistFetch();
      const response = fetch(`${urlApi}/users/${id}/tracks`)
        .then(response => response.json())
        .then(data => {
          this.props.playlistFetched(data);
        })
        .catch(error => this.props.playlistFetchError(error));
    }
    catch (error) {
      console.error(error);
    }
  }

  handleDelete(idtitle) {
    Alert.alert('', 'Voulez-vous supprimer ce morceau ?',
      [{ text: 'Non' }, { text: 'Oui', onPress: () => this.deleteTrack(idtitle) }]
    );
  }

  deleteTrack(idtitle) {
    fetch(`${urlApi}/users/${this.props.loggedUser.id}/tracks/${idtitle}`, {
      method: 'DELETE'
    })
      .then(response => {
        response.json();
        this.props.trackDeleted(idtitle);
      })
      .catch(error => this.props.playlistFetchError(error));


  }

  handleAdd() {
    this.props.navigation.navigate('Title');

  }

  displayButtonAddIfNeeded() {
    const displayAddButton = this.props.tracks.length < 10;
    return displayAddButton ?
      <TouchableOpacity>
        <Button
          buttonStyle={styles.button}
          title="Ajouter un morceau"
          onPress={() => this.handleAdd()}
        />
      </TouchableOpacity> : null
  }

  render() {
    const { tracks, loading, error } = this.props;
    return (
      <View style={styles.container}>
        <Image source={escalier} style={styles.mark} resizeMode="cover" />
        <Text style={styles.title}>Ma PlayList</Text>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {!loading &&
          <View>
            <FlatList
              data={tracks}
              keyExtractor={({ id }, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.item} onPress={toto => this.handleDelete(item.idtitle)}>
                    <Text style={styles.itemText}> Artiste:{item.artist}</Text>
                    <Text style={styles.itemText}> Titre: {item.title}</Text>
                  </TouchableOpacity>
                )
              }}
            />
            {this.displayButtonAddIfNeeded()}
          </View>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#2f55a4",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 50
  },
  itemText: {
    textAlign: "center",
    fontSize: 15,
    color: "#ffffff"
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#ffffff",
    marginTop: 25
  },
  mark: {
    position: "absolute",
    width: "100%",
    height: "100%"
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
  }
});