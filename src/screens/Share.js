import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity, Linking, ActivityIndicator
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Share, { ShareSheet, Button } from 'react-native-share';


const { width } = Dimensions.get("window");



class SocialShare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    onCancel() {
        console.log("CANCEL")
        this.setState({ visible: false });
    }
    onOpen() {
        console.log("OPEN")
        this.setState({ visible: true });
    }

    render() {

        let shareOptions = {
            title: "React Native",
            message: "Hola mundo",
            url: "http://facebook.github.io/react-native/",
            subject: "Share Link" //  for email
        };

        let shareImageBase64 = {
            title: "React Native",
            message: "Hola mundo",
            /* url: REACT_ICON,*/
            subject: "Share Link" //  for email
        };

        return (

            // options de partage

            <View style={styles.container}>

                {/*<TouchableOpacity onPress={()=>{
                    Share.open(shareImageBase64);
                }}>
                    <View style={styles.instructions}>
                        <Text>Simple Share Image Base 64</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    Share.open(shareOptions);
                }}>
                    <View style={styles.instructions}>
                        <Text>Simple Share</Text>
                    </View>
                </TouchableOpacity>*/}

                <TouchableOpacity onPress={this.onOpen.bind(this)}>
                    <View style={styles.instructions}>
                        <Text>Afficher les réseaux sociaux</Text>
                    </View>
                </TouchableOpacity>

                {/*Liens réseaux sociaux */}

                <ShareSheet style={styles.container2}
                    visible={this.state.visible}
                    onCancel={this.onCancel.bind(this)}>

                    <Button style={styles.socialButton}
                        iconSrc={TWITTER_ICON}
                        onPress={() => {
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                    "social": "twitter"
                                }));
                            }, 300);
                        }} />

                    <Button style={styles.socialButton}
                        iconSrc={FACEBOOK_ICON}
                        onPress={() => {
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                    "social": "facebook"
                                }));
                            }, 300);
                        }} />

                    <Button style={styles.socialButton}
                        iconSrc={SNAPCHAT_ICON}
                        onPress={() => {
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                    "social": "snapchat"
                                }));
                            }, 300);
                        }} />

                    <Button style={styles.socialButton}
                        iconSrc={INSTAGRAM_ICON}
                        onPress={() => {
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                    "social": "instagram"
                                }));
                            }, 300);
                        }} />

                </ShareSheet>
            </View>

            // variante liens réseaux sociaux
            // <TouchableOpacity
            //     onPress={() => {
            //         this.onCancel();
            //         setTimeout(() => {
            //             Share.shareSingle(Object.assign(shareOptions, {
            //                 "social": "twitter"
            //             }));
            //         }, 300);
            //     }}>
            //     <Image style={{ width: 40, height: 40 }} source={TWITTER_ICON} />
            // </TouchableOpacity>
            // <TouchableOpacity
            //     onPress={() => {
            //         this.onCancel();
            //         setTimeout(() => {
            //             Share.shareSingle(Object.assign(shareOptions, {
            //                 "social": "facebook"
            //             }));
            //         }, 300);
            //     }}>
            //     <Image style={{ width: 40, height: 40 }} source={FACEBOOK_ICON} />
            // </TouchableOpacity>
            // <TouchableOpacity
            //     onPress={() => {
            //         this.onCancel();
            //         setTimeout(() => {
            //             Share.shareSingle(Object.assign(shareOptions, {
            //                 "social": "instagram"
            //             }));
            //         }, 300);
            //     }}>
            //     <Image style={{ width: 40, height: 40 }} source={INSTAGRAM_ICON} />
            // </TouchableOpacity>
            // <TouchableOpacity
            //     onPress={() => {
            //         this.onCancel();
            //         setTimeout(() => {
            //             Share.shareSingle(Object.assign(shareOptions, {
            //                 "social": "snapchat"
            //             }));
            //         }, 300);
            //     }}>
            //     <Image style={{ width: 40, height: 40 }} source={SNAPCHAT_ICON} />
            // </TouchableOpacity>


        )
    };
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    socialButton: {
        width: 5
    },
    instructions: {
        marginTop: 20,
        marginBottom: 20,
    },
});

//  twitter icon
const TWITTER_ICON = require('./images/Social-icons/Logo-TWITTER-C2G.png');

//  facebook icon
const FACEBOOK_ICON = require('./images/Social-icons/Logo-FACEBOOK-C2G.png');

//  instagram icon
const INSTAGRAM_ICON = require('./images/Social-icons/Logo-INSTAGRAM-C2G.png');

//  snapchat icon
const SNAPCHAT_ICON = require('./images/Social-icons/Logo-SNAPCHAT-C2G.png');


/*AppRegistry.registerComponent('ShareParticularAlerteScreen', () => ShareParticularAlerteScreen);*/

export default SocialShare;
