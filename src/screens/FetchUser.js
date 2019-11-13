import React from 'react';
import {
    ActivityIndicator, Text, View, SafeAreaView, TextInput,
    TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView
} from 'react-native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';
import { scale } from 'react-native-size-matters';
import { urlApi } from '../Config/constants';

import escalier from './images/escalier.jpg';

class FetchUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            loading: true
        };
    }
    async componentDidMount() {
        const id = this.props.loggedUser.id;
        try {
            const response = await fetch(`${urlApi}/users/${id}`);
            const data = await response.json();
            this.setState({
                loading: false,
                user: data
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        const { user, loading } = this.state;
        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <Image source={escalier} style={styles.mark} resizeMode="cover" />
                <Text style={styles.title}>Mon compte</Text>
                {loading && <ActivityIndicator />}
                {!loading &&

                    <View style={styles.container2}>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user[0].email}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user[0].name}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user[0].firstname}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user[0].contactA}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{user[0].contactB}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Button
                                buttonStyle={styles.button}
                                // onPress={this.handleSubmit.bind(this)}
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
        marginVertical: 20,
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
        marginTop: 25
    }
});

export default FetchUser;
