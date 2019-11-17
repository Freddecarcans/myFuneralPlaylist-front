import { combineReducers } from 'redux';
import auth from './auth.reducer';
import tracks from './tracks.reducer';




const allReducers = combineReducers({
    auth,
    tracks

});

export default allReducers;
