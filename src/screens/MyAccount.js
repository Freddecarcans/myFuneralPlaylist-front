import React from 'react';
import {
    ActivityIndicator, Text, View, SafeAreaView, TextInput,
    TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';
import { scale } from 'react-native-size-matters';
import { urlApi } from '../Config/constants';

import escalier from './images/escalier.jpg';

class FetchUser extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const id = this.props.loggedUser.id;
        try {
            // const response = await fetch(`${urlApi}/users/${id}`);
            // const data = await response.json();
            // this.setState({
            //     loading: false,
            //     user: data
            this.props.fetchUserStart();
      const response = fetch(`${urlApi}/users/${id}`)
        .then(response => response.json())
        .then(data => {
          this.props.fetchUserSuccess(data);
            });
        }
        catch (error) {
            console.error(error => this.props.fetchUserError(error));
        }
    }
    // goToRegister () {
       
    // }
    render() {
        const { user, loading } = this.props;
        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <Image source={escalier} style={styles.mark} resizeMode="cover" />
                <Text style={styles.title}>Mon compte</Text>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                {!loading &&

                    <View style={styles.container2}>
                        <Text style={styles.text}>Email</Text>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user.email}</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Nom</Text>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user.name}</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Prénom</Text>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user.firstname}</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Contact 1</Text>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user.contactA}</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Contact 2</Text>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user.contactB}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Button
                                buttonStyle={styles.button}
                                onPress={() => Alert.alert('Ce bouton n\'est pas encore branché')}
                                title="Modifier mes informations"
                                titleStyle={styles.signinText}
                            />
                        </TouchableOpacity>

                    </View>}
            </KeyboardAvoidingView>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    },
    container2: {
        flex: 1,
    },
    item: {
        backgroundColor: "#2f55a4",
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 50
    },
    itemText: {
        textAlign: "center",
        fontSize: 15,
        color: "#ffffff"
    },
    button: {
        backgroundColor: "#2f55a4",
        marginLeft: scale(50),
        marginRight: scale(50),
        paddingVertical: scale(12),
        alignItems: "center",
        justifyContent: "center",
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
    text: {
        color: "#0059b3",
		marginLeft: scale(50)  
    }
});

export default FetchUser;
