import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Connection from '../screens/Connection';
import CreatePlayList from '../screens/CreatePlayList';
import PlayList from '../screens/PlayList';
import FetchPlaylist from '../screens/FetchPlaylist';
import  AuthLoadingScreen from '../screens/AuthLoadingScreen';

export const AppStack = createStackNavigator({
    Home: Home,
    Register: Register,   
    FetchPlaylist: FetchPlaylist
});
export const AuthStack = createStackNavigator({
    Connection: Connection,
})
export const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
