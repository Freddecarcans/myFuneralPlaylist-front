import React from 'react';
import {
  FlatList, ActivityIndicator, Text, View, SafeAreaView,
  TouchableOpacity, StyleSheet, AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';
import { urlApi } from '../Config/constants';


export default class FetchPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, tracks: "" }
  }

  async componentDidMount() {
    console.log(JSON.stringify(AsyncStorage.getItem('token')));
    
    try {
      const response = await fetch(`${urlApi}/users/37`);
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
    const { tracks } = this.state;
    
    if (this.state.isLoading) {
      return (
        <View style={styles.containers}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container}>

        <FlatList
          data={tracks}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity key={item.id} style={styles.item}>
                <Text> Artiste:{item.artist}</Text>
                <Text> Titre: {item.title}</Text>
              </TouchableOpacity>
            )
          }}
          // keyExtractor={(id) => id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#0099ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 20,
  },

});