
const initialState = {
    loading: false,
    user: {},
    error: ''
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case "START_FETCH_USER": {
            return {
                ...state,
                loading: true
            }
        }
        case "FETCH_SUCCES_USER": {
            return {
                ...state,
                user: action.user,
                loading: false,
                err:""
            }
        }
        case "FETCH_ERROR_SUCCES": {
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