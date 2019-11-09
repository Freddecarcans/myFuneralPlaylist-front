import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Connection from '../screens/Connection';
import CreatePlayList from '../screens/CreatePlayList';
import PlayList from '../screens/PlayList';
import FetchPlaylist from '../screens/FetchPlaylist';
import EmailScreen from '../screens/EmailScreen';
import HomeAfterLogin from '../screens/HomeAfterLogin';
import MyAccount from '../screens/MyAccount';


const RouterStackNavigator = createStackNavigator({
	Home: {
		screen: Home,
	},
	Register: {
		screen: Register,
	},
	EmailScreen: {
		screen: EmailScreen,
	},
	HomeAfterLogin: {
		screen: HomeAfterLogin,
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
	FetchPlaylist: {
		screen: FetchPlaylist,
		navigationOptions: {
			title: 'Ma Playlist'
		}
	},
},
	{
		initialRouteName: 'Home'
	}
);
export default createAppContainer(RouterStackNavigator);
