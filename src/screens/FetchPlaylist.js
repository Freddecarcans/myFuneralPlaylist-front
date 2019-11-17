import React from 'react';
import {
  FlatList, ActivityIndicator, Text, View,
  TouchableOpacity, StyleSheet, Image
} from 'react-native';
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

  render() {
    const { tracks, loading, error } = this.props;
    return (
      <View style={styles.container}>
        <Image source={escalier} style={styles.mark} resizeMode="cover" />
        <Text style={styles.title}>Ma PlayList</Text>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {!loading &&
          <FlatList
            data={tracks}
            keyExtractor={({ id }, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.itemText}> Artiste:{item.artist}</Text>
                  <Text style={styles.itemText}> Titre: {item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />}
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
  }
});