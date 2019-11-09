// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from 'react-native';

const tokenStorage = async () => {
  try {
    await AsyncStorage.getItem('token')
  } catch (error) {
    console.log(error.message);  
  }
}
const emailStorage = async () => {
  try{
    await AsyncStorage.getItem('email')
  } catch (error) {
    console.log(error.message);
    
  }
}

const initialState = {
  token: tokenStorage,
  email: emailStorage,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return {
        ...state,
        token: (action.user ? action.user.token : ''),
        email: (action.user ? action.user.email : ''),
      };
    }
    case 'USER_LOGOUT': {
      return {
        ...state,
        token: null,
        email: null,
      };
    }
    default:
      return state;
  }
};
export default user;