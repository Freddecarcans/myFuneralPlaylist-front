import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';



const allReducers = combineReducers({
    user,
    auth,

});

export default allReducers;