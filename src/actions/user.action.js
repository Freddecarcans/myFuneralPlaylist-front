export const fetchUserStart = () => ({
    type: "FETCH_USER_START"
});

export const fetchUserSuccess = (user) => ({
    type: "FETCH_USER_SUCCESS",
    user,
});

export const fetchUserError = (error) => ({
    type: "FETCH_USER_ERROR",
    error
});

  