import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Connection from '../screens/Connection';
import CreatePlayList from '../screens/CreatePlayList';

import FetchPlaylistContainer from '../screens/FetchPlaylist.container';
import EmailScreen from '../screens/EmailScreen';
import HomeAfterLogin from '../screens/HomeAfterLogin';
import MyAccount from '../screens/MyAccount';
import FetchUserContainer from '../screens/FetchUser.container';


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
	MyAccount: {
		screen: MyAccount,
	},
	Connection: {
		screen: Connection,
		navigationOptions: {
			title: 'Connexion'
		}
	},
	CreatePlayList: {
		screen: CreatePlayList,
		navigationOptions: {
			title: 'Créer une playlist'
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
},
	{
		initialRouteName: 'Home'
	}
);
export default createAppContainer(RouterStackNavigator);
