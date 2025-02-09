import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import allReducers from './reducers';

const middlewares = [ReduxThunk];

const store = createStore(
     allReducers,
    composeWithDevTools(applyMiddleware(...middlewares)),
);


export default store;