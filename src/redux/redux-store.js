import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import pizzasReducer from './pizza-reducer';
import cartReducer from './cart-reducer';

let reducers = combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer
}
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__ = store;

export default store;