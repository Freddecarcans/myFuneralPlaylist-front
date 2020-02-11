import React from 'react';
import {
    ActivityIndicator, Text, View, SafeAreaView, ScrollView,
    TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Alert
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { scale } from 'react-native-size-matters';
import { urlApi } from '../../constants';

import escalier from './images/escalier.jpg';

class MyAccount extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const id = this.props.loggedUser.id;
        const token = this.props.loggedUser.token;
            this.props.fetchUserStart();
            await fetch(`${urlApi}/users/profile/${id}`, {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                })
            })
                .then(response => response.json())
                .then(data => {
                    this.props.fetchUserSuccess(data);
                });
    }

    goToUpdateRegister() {
        this.props.navigation.navigate('UpdateRegister')
    }

    render() {
        const { user, loading } = this.props;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <Image source={escalier} style={styles.mark} resizeMode="cover" />
                <Text style={styles.title}>Mon compte</Text>
                <Icon name="home" color="#fff" style={styles.icon}
                    onPress={() => this.props.navigation.navigate('HomeAfterLogin')}
                />
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                {!loading &&
                    <ScrollView style={styles.container2}>
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

                        <Text style={styles.text}>Adresse</Text>
                        <TouchableOpacity style={styles.item} placeholder="N° et voie">
                            <Text style={styles.itemText}>{user.adress}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user.zipcode}  -  {user.town}</Text>
                        </TouchableOpacity>

                        <Text style={styles.text}>Contact 1</Text>
                        <TouchableOpacity style={styles.item}
                            onPress={() => Alert.alert(`${user.contactAFirstName} ${user.contactAName}`, `${user.contactA}`,
                                [{ text: 'OK' }, { text: 'Modifier', onPress: () => this.props.navigation.navigate('MyContacts') }])}
                        >
                            <Text style={styles.itemText}>{user.contactAFirstName} {user.contactAName} </Text>
                        </TouchableOpacity>

                        <Text style={styles.text}>Contact 2</Text>
                        <TouchableOpacity style={styles.item}
                            onPress={() => Alert.alert(`${user.contactBFirstName} ${user.contactBName}`, `${user.contactB}`,
                                [{ text: 'OK' }, { text: 'Modifier', onPress: () => this.props.navigation.navigate('MyContacts') }])}
                        >
                            <Text style={styles.itemText}>{user.contactBFirstName} {user.contactBName}</Text>
                        </TouchableOpacity>

                        <Text style={styles.text}>Mot de passe</Text>
                        <TouchableOpacity style={styles.item}
                            onPress={() => Alert.alert('', 'Voulez-vous changer de mot de passe ?',
                                [{ text: 'Non' }, { text: 'Oui' }])}
                        >
                            <Text style={styles.itemText}>......</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Button
                                buttonStyle={styles.button}
                                onPress={() => this.goToUpdateRegister()}
                                title="Modifier mes informations"
                                titleStyle={styles.signinText}
                            />
                        </TouchableOpacity>
                    </ScrollView>}
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        // justifyContent: "center"
    },
    container3: {
        flexDirection: "row",
        justifyContent: "space-around"
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

export default MyAccount;
