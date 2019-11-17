import _filter from 'lodash/filter';

const initialState = { data: [], loading: true, error: '' };

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
    case 'TRACK_DELETED': {
      return {
        ...state,
        data: _filter([...state.data], track => (track.idtitle !== action.idTitle))
      };
    }
    default:
      return state;
  }
};
export default tracks;