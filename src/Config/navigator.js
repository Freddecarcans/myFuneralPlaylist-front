
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import OtherScreen from './screens/OtherScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';




export const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
export const AuthStack = createStackNavigator({ SignIn: SignInScreen });

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