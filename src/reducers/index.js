import { combineReducers } from 'redux';
import auth from './auth.reducer';




const allReducers = combineReducers({
    auth,
   

});

export default allReducers;