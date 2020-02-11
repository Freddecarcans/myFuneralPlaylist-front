import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import allReducers from './reducers';

const store = createStore(
     allReducers,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export default store;
