import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Connection from '../screens/Connection';
import FetchPlaylistContainer from '../screens/FetchPlaylist.container';
import EmailScreen from '../screens/EmailScreen';
import HomeAfterLogin from '../screens/HomeAfterLogin';
import FetchUserContainer from '../screens/FetchUser.container';
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
	FetchUser: {
		screen: FetchUserContainer,
		navigationOptions: {
			header: null
		}
	},
	FetchPlaylist: {
		screen: FetchPlaylistContainer,
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
