/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import Router from './src/Config/router';
import store from './src/store';


class App extends React.Component {
	
	render() {
		console.disableYellowBox = true;
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Router />
				</View>
			</Provider>
			
		);
	}
}
const styles = StyleSheet.create({
	container: {
	  flex: 1
	},
}
)
export default App;

