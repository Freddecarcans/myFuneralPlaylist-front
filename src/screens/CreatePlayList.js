
import React from 'react';
import { AsyncStorage, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { Text } from 'react-native';


class CreatePlayList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playlist: []

		};

	}
	componentDidMount() {
		
			console.log(AsyncStorage.getItem('token'));
	}
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.container2}>
					<Text>
					Créez votre playlist
					</Text>


				</View>

			</ScrollView>
		);
	}
}
// EStyleSheet.build(styles);

const styles = StyleSheet.create({
	container: {
		backgroundColor: "grey",
		flex: 1
	},
	container2: {
		flex: 1,
		justifyContent: "flex-end"
	},

	signup: {
		backgroundColor: "#50bcb8",
		marginLeft: scale(16),
		marginRight: scale(16),
		paddingVertical: scale(8),
		alignItems: "center",
		justifyContent: "center",
		marginBottom: scale(24)
	},

	textinput: {
		marginLeft: 5,
		marginRight: 5,
		height: 50,
		borderColor: '#000000',
		borderWidth: 1,
		paddingLeft: 5
	}
});
export default CreatePlayList;