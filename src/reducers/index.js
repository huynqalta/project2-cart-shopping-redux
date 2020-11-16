import { combineReducers } from 'redux';
import products from './products';
import cart from './addOrRemoveToCart'
import message from './message'
const appReducer=combineReducers({
    products,
    cart,
    message
});
export default appReducer;
