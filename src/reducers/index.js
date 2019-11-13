import { combineReducers } from 'redux';
import auth from './auth.reducer';
import user from './user.reducer';




const allReducers = combineReducers({
    auth,
    user

});

export default allReducers;
