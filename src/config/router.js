import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import RegisterContainer from '../screens/Register.container';
import ConnectionContainer from '../screens/Connection.container';
import MyPlaylistContainer from '../screens/MyPlaylist.container';
import EmailScreen from '../screens/EmailScreen';
import HomeAfterLoginContainer from '../screens/HomeAfterLogin.container';
import MyAccountContainer from '../screens/MyAccount.container';
import TitleContainer from '../screens/Title.container';
import MyContactsContainer from '../screens/MyContacts.container';
import UpdateRegisterContainer from '../screens/UpdateRegister.container';


const RouterStackNavigator = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	Register: {
		screen: RegisterContainer,
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
		screen: HomeAfterLoginContainer,
		navigationOptions: {
			header: null
		}
	},
	Connection: {
		screen: ConnectionContainer,
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
	UpdateRegister: {
		screen: UpdateRegisterContainer,
		navigationOptions: {
			header: null
		}
	}
},
	{
		initialRouteName: 'Home'
	}
);
export default createAppContainer(RouterStackNavigator);
