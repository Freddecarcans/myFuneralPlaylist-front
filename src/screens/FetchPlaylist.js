import React from 'react';
import {
  FlatList, ActivityIndicator, Text, View, SafeAreaView,
  TouchableOpacity, StyleSheet, AsyncStorage, Image
} from 'react-native';
import Constants from 'expo-constants';
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';


export default class FetchPlaylist extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tracks: "",
      iduser: ""
    }
  }
  getId = async () => {
    const {iduser} = this.state;
    try {
      let iduser = await AsyncStorage.getItem('iduser');
      let id = JSON.parse(iduser)
      console.log(id);
    } catch (error) {
      console.error(error);
    }
    this.setState({
      iduser
    })
  }
  async componentDidMount() {
    let iduser = await AsyncStorage.getItem('iduser');
    let id = JSON.parse(iduser)
    
    console.log(`${urlApi}/users/${id}`);
    
    try {
      const response = await fetch(`${urlApi}/users/${id}`);
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
        <Image source={escalier} style={styles.mark} resizeMode="cover" />

        <Text style={styles.title}>Titre</Text>

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
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundcolor: "grey",
    marginTop: Constants.statusBarHeight,
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
    color: "#ffffff"
  },
  mark: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});