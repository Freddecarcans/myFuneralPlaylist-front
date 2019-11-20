const initialState = {
    loading: true,
    data: {
        email: "",
        name: "",
        firstname: "",
        username: "",
        contactA: "",
        contactB: ""
    },
    error: ''
};
const user = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_START": {
            return {
                ...state,
                loading: true
            }
        }
        case "FETCH_USER_SUCCESS": {
            return {
                ...state,
                loading: false,
                error: "",
                data: action.user[0]
            }
        }
        case "FETCH_USER_ERROR": {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}
export default user;
