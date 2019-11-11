
export const userLogin = user => ({
    type: 'USER_LOGIN',
    user,
  });
  
  export const userLogged = user => ({
    type: 'USER_LOGGED',
    user,
  });
  
  export const userLogout = user => ({
    type: 'USER_LOGOUT',
    user,
  });