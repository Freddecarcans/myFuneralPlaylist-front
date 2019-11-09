import React from 'react';
import { View, TextInput, StyleSheet, Keyboard, Image, Text, AsyncStorage, ActivityIndicator, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { urlApi } from '../Config/constants';
import escalier from './images/escalier.jpg';

class EmailScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            // isLoading: false
        };
    }

    goToRegister = () => {
        const email = this.state.email;
        this.props.navigation.navigate('Register', {email: {email}});
    }

    submitEmail = async () => {
        const { email } = this.state;
        Keyboard.dismiss();
        try {
            const response = await fetch(`${urlApi}/auth/email/${email}`);
            const data = await response.json();
            console.log(data);
            
            if (data[0] && data !== []) {
                Alert.alert('Email déjà enregistré', 'Essayez une autre adresse', [{text:'OK'}])
            }
            else if(data.message === "Not Found"){
                Alert.alert('Pas d\'adresse!', 'Entrez une adresse valide', [{text:'OK'}])
            } 
            else {
                this.goToRegister();
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        
        return (
            <View style={styles.container}>
                <Image source={escalier} style={styles.mark} resizeMode="cover" />
                <Text style={styles.title}>Entrer une adresse email</Text>
                <TextInput style={styles.signin}
                    placeholder="email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                >
                </TextInput>
                <TouchableOpacity>
                    <Button
                        buttonStyle={styles.button}
                        title="Soumettre l'email"
                        onPress={this.submitEmail}
                    />
                </TouchableOpacity>
            </View>

        );
    }
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
        marginTop: 25
    }
});
export default EmailScreen;
