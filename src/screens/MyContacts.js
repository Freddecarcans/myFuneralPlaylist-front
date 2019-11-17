import React from 'react';

import { Text, View, TextInput, StyleSheet, Image, Alert, Keyboard } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button } from "react-native-elements";
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';

class MyContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactA: this.props.contactA,
            contactB: this.props.contactB
        }
    }

    componentDidMount() {
        fetch(`${urlApi}/users/${this.props.loggedUser.id}`)
            .then(response => response.json())
            .then(data => {
                this.props.fetchUserSuccess(data);
            })
            .catch(error => this.props.fetchUserError(error));
    }

    // test route
    goToHomeAfterLogin() {
        this.props.navigation.navigate('HomeAfterLogin');
    }

    saveContacts() {
        let userId = this.props.loggedUser.id;
        const { contactA, contactB } = this.state;
        Keyboard.dismiss();
        fetch(`${urlApi}/users/${userId}/contact`, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({ contactA, contactB }),
        })
            .then(res => {
                res.json()
                if (res.status === 201) {
                    Alert.alert('Contacts créés avec succès', '', [
                        {
                            text: 'OK',
                            onPress: () => {
                                fetch(`${urlApi}/users/${userId}`)
                                    .then(response => response.json())
                                    .then(data => {
                                        this.props.fetchUserSuccess(data);
                                    })
                                    .catch(error => this.props.fetchUserError(error));
                                this.goToHomeAfterLogin()
                            }
                        }])
                }
            })
    }

    render() {
        const { contactA, contactB } = this.state;
        return (
            <View style={styles.container} >
                <Image source={escalier} style={styles.mark} resizeMode="cover" />
                <Text style={styles.title}>Enregistrez vos Contacts</Text>
                <TextInput
                    style={styles.signin}
                    placeholder="Contact 1"
                    value={contactA}
                    onChangeText={(contactA) => this.setState({ contactA })}
                />

                <TextInput
                    style={styles.signin}
                    placeholder="Contact 2"
                    value={contactB}
                    onChangeText={(contactB) => this.setState({ contactB })}
                />
                <Button
                    buttonStyle={styles.button}
                    title="Enregistrez ces Contacts"
                    onPress={() => this.saveContacts()}
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
        marginTop: 25
    }
});
export default MyContacts;
