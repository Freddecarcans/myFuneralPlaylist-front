import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Keyboard, Image, Text, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { urlApi } from '../../constants';
import escalier from './images/escalier.jpg';


function EmailScreen(props) {

    const [email, setEmail] = useState("");

    const goToRegister = () => {
        props.navigation.navigate('Register', { email: { email } });
    }

    const submitEmail = async () => {
        Keyboard.dismiss();
        try {
            const response = await fetch(`${urlApi}/auth/email/${email}`);
            const data = await response.json();

            if (data[0] && data !== []) {
                Alert.alert('Email déjà enregistré', 'Essayez une autre adresse', [{ text: 'OK' }])
            }
            else if (data.message === "Not Found") {
                Alert.alert('Pas d\'adresse!', 'Entrez une adresse valide', [{ text: 'OK' }])
            }
            else {
                goToRegister();
            }
        } catch (error) {
            Alert.alert("Une erreur s'est produite, veuillez réessayer" )
            console.error(error)
        }
    }


    return (
        
        <View style={styles.container}>
            <Image source={escalier} style={styles.mark} resizeMode="cover" />
            <Text style={styles.title}>Entrer une adresse email</Text>
            <TextInput style={styles.signin}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
            >
            </TextInput>
            <TouchableOpacity>
                <Button
                    buttonStyle={styles.button}
                    title="Soumettre l'email"
                    onPress={submitEmail}
                />
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
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
        marginTop: 50
    }
});
export default EmailScreen;
