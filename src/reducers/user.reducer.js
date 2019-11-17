
const initialState = {
    loading: true,
    err: '',
    // email: "",
    // name: "",
    // firstname: "",
    // username: "",
    // contactA: "",
    // contactB: "",
    // playlisttitle: ""
    user:[]

};

const user = (state = initialState, action) => {
    switch (action.type) {
        case "START_FETCH_USER": {
            return {
                ...state,
                loading: true
            }
        }
        case "FETCH_SUCCESS_USER": {
            return {
                ...state,
                loading: false,
                err: "",
                user: action.user.user
            }
        }
        case "FETCH_ERROR_USER": {
            return {
                ...state,
                loading: false,
                err: action.err
            }
        }
        default:
            return state;
    }
}
export default user;