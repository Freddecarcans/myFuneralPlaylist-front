import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Components/Home';
import Register from '../Components/Register';
import Connection from '../Components/Connection';
import CreatePlayList from '../Components/CreatePlayList';
import PlayList from '../Components/PlayList';


const RouterStackNavigator = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions:{
			title:'Accueil'
		}
	},
	Register: {
		screen: Register,
		navigationOptions:{
			title:'Créer un compte'
		}
	},
	Connection: {
		screen: Connection,
		navigationOptions:{
			title:'Connexion'
		}
	},
	CreatePlayList: {
		screen: CreatePlayList,
		navigationOptions:{
			title:'Créer une playlist'
		}
	},
	PlayList: {
		screen: PlayList,
		navigationOptions:{
			title:'Ma Playlist'
		}
	},
},
	{
		initialRouteName: 'Home'
	}
);
export default createAppContainer(RouterStackNavigator);
