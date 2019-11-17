import { combineReducers } from 'redux';
import auth from './auth.reducer';
import tracks from './tracks.reducer';
import user from './user.reducer';

const allReducers = combineReducers({
    auth,
    user,
    tracks

});

export default allReducers;
