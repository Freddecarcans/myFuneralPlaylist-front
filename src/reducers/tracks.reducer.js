const initialState = { data: [], loading: false, error: '' };

const tracks = (state = initialState, action) => {
  switch (action.type) {
    case 'TRACKS_FETCH': {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case 'TRACKS_FETCH_SUCCESS': {
      return {
        ...state,
        data: action.data,
        loading: false,
        error: ''
      };
    }
    case 'FETCH_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
};
export default tracks;