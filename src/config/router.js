import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Connection from '../screens/Connection';
import MyPlaylistContainer from '../screens/MyPlaylist.container';
import EmailScreen from '../screens/EmailScreen';
import HomeAfterLogin from '../screens/HomeAfterLogin';
import MyAccountContainer from '../screens/MyAccount.container';
import TitleContainer from '../screens/Title.container';
import MyContactsContainer from '../screens/MyContacts.container';


const RouterStackNavigator = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	Register: {
		screen: Register,
		navigationOptions: {
			header: null
		}
	},
	EmailScreen: {
		screen: EmailScreen,
		navigationOptions: {
			header: null
		}
	},
	HomeAfterLogin: {
		screen: HomeAfterLogin,
		navigationOptions: {
			header: null
		}
	},
	Connection: {
		screen: Connection,
		navigationOptions: {
			header: null
		}
	},
	MyAccount: {
		screen: MyAccountContainer,
		navigationOptions: {
			header: null
		}
	},
	MyPlaylist: {
		screen: MyPlaylistContainer,
		navigationOptions: {
			header: null
		}
	},
	Title: {
		screen: TitleContainer,
		navigationOptions: {
			header: null
		}
	},
	MyContacts: {
		screen: MyContactsContainer,
		navigationOptions: {
			header: null
		}
	},
},
	{
		initialRouteName: 'Home'
	}
);
export default createAppContainer(RouterStackNavigator);
