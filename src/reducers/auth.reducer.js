
const initialState = {
  token: "",
  email:"",
  id: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return {
        ...state,
        token: (action.user ? action.user.token : ''),
        email: (action.user ? action.user.email : ''),
      };
    }
    case 'USER_LOGGED': {
      return {
        ...state,
        token: action.user.token,
        email: action.user.email,
        id: action.user.iduser
      };
    }
    case 'USER_LOGOUT': {
      return {
        ...state,
        token: null,
        email: null,
        id: null
      };
    }
    default:
      return state;
  }
};
export default user;