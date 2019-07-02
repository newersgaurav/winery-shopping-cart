import { combineReducers } from 'redux';
import showProductReducer from '../component/ProductList/reducer';
import cartReducer from '../Reducer/cartReducer';
import orderAmountReducer from '../Reducer/orderAmountReducer';

export default combineReducers({
    showProductReducer,
    cartReducer,
    orderAmountReducer,
})