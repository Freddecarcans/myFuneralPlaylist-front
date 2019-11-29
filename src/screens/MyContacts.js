import React from 'react';
import {
    Text, View, TextInput, StyleSheet, ScrollView,
    Image, Alert, Keyboard, KeyboardAvoidingView
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button, Icon } from "react-native-elements";
import { urlApi } from '../../constants';
import escalier from './images/escalier.jpg';

class MyContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactA: props.contactA,
            contactAName: props.contactAName,
            contactAFirstName: props.contactAFirstName,
            contactB: props.contactB,
            contactBName: props.contactBName,
            contactBFirstName: props.contactBFirstName
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
    // App navigation
    goToHomeAfterLogin() {
        this.props.navigation.navigate('HomeAfterLogin');
    }
    //  Enregistrer les contacts
    saveContacts() {
        let userId = this.props.loggedUser.id;
        const { contactA, contactAName, contactAFirstName, contactB, contactBName, contactBFirstName } = this.state;

        Keyboard.dismiss();
        fetch(`${urlApi}/users/${userId}/contact`, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({ contactA, contactAName, contactAFirstName, contactB, contactBName, contactBFirstName }),
        })
            .then(res => {
                res.json()
                if (res.status === 201) {
                    Alert.alert('Contacts modifiés avec succès', '', [
                        { text: 'OK', onPress: () => { this.goToHomeAfterLogin() } }])
                }
            })
    }
    render() {
        const { contactA, contactAName, contactAFirstName, contactB, contactBName, contactBFirstName } = this.state;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Image source={escalier} style={styles.mark} resizeMode="cover" />
                <Text style={styles.title}>Mes Contacts</Text>
                <Icon name="home" color="#fff"  style={styles.icon} 
					onPress={() => this.props.navigation.navigate('HomeAfterLogin')}
				/>
                    <View style={styles.container2}> 
                        <Text style={styles.label}>Contact 1</Text>
                        <View style={styles.container3}>
                            <TextInput
                                style={styles.inputname}
                                placeholder="Prénom"
                                value={contactAFirstName}
                                onChangeText={(contactAFirstName) => this.setState({ contactAFirstName })}
                            />
                            <TextInput
                                style={styles.inputname}
                                placeholder="Nom"
                                value={contactAName}
                                onChangeText={(contactAName) => this.setState({ contactAName })}
                            />
                        </View>
                        <TextInput
                            style={styles.signin}
                            placeholder="Contact 1"
                            value={contactA}
                            onChangeText={(contactA) => this.setState({ contactA })}
                        />
                        <Text style={styles.label}>Contact 2</Text>
                        <View style={styles.container3}>
                            <TextInput
                                style={styles.inputname}
                                placeholder="Prénom"
                                value={contactBFirstName}
                                onChangeText={(contactBFirstName) => this.setState({ contactBFirstName })}
                            />
                            <TextInput
                                style={styles.inputname}
                                placeholder="Nom"
                                value={contactBName}
                                onChangeText={(contactBName) => this.setState({ contactBName })}
                            />
                        </View>
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
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container2: {
        flex: 1,
        justifyContent: "center"
    },
    container3: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    signin: {
        backgroundColor: "#2f55a4",
        marginLeft: scale(16),
        marginRight: scale(16),
        paddingVertical: scale(8),
        alignItems: "center",
        marginBottom: scale(20),
        borderRadius: 50,
        paddingLeft: scale(20),
        color: "#ffffff"
    },
    inputname: {
        backgroundColor: "#2f55a4",
        marginRight: 5,
        marginBottom: 5,
        height: 40,
        paddingLeft: scale(20),
        width: "40%",
        borderRadius: 50,
        color: "#ffffff"
    },
    button: {
        backgroundColor: "#2f55a4",
        marginLeft: scale(50),
        marginRight: scale(50),
        paddingVertical: scale(8),
        alignItems: "center",
        marginTop: scale(15),
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
        marginTop: 50,
    },
    label: {
        color: "#0059b3",
        marginLeft: scale(50)
    },
    text: {
        color: "#ffffff",
        textAlign: "center",
    }
});
export default MyContacts;
