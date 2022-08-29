import shopReducer from './Shopping/shopping-reducers';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
