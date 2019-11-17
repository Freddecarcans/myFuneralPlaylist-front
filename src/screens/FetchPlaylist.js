import React from 'react';
import {
  FlatList, ActivityIndicator, Text, View,
  TouchableOpacity, StyleSheet, Image
} from 'react-native';
import Constants from 'expo-constants';
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';

export default class FetchPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tracks: "",
    }
  }

  async componentDidMount() {
    let id = this.props.loggedUser.id
    try {
      const response = await fetch(`${urlApi}/users/${id}/tracks`);
      const data = await response.json();
      this.setState({
        isLoading: false,
        tracks: data,
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    const { tracks, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <Image source={escalier} style={styles.mark} resizeMode="cover" />
        <Text style={styles.title}>Ma PlayList</Text>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading && 
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