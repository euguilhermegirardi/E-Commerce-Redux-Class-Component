import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import shopReducer from './reducers';


const store = createStore(shopReducer, applyMiddleware(reduxThunk));

export default store;
