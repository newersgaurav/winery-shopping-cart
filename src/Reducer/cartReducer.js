import data from '../json/user';
import { 
    ADD_TO_CART, 
    EMPTY_CART, 
    INCREASE_QUANTITY , 
    DECREASE_QUANTITY, 
    DELETE_PRODUCT,
    CHANGE_COLOR,
    SIZE_CHANGE, 
    ADD_ADDRESS , 
    ADD_ORDERS } from '../Reducer/ActionTypes/cartActionTypes';
const initialState = {
    ...data[0],
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:{
            let hasProduct = false;
            let newCart = state.cartItems.map(items => {
                if (items.key === action.payload.key){
                    if(items.defaultColor === action.payload.defaultColor && items.size === action.payload.size){
                        items.quantity += 1;
                        hasProduct = true;
                        return items;                         
                    }
                }
                return items;
            })
            if(hasProduct){
                return {...state,cartItems:newCart}
            }
            else{
                action.payload.quantity +=1;
                let newData = [...state.cartItems,action.payload];
                return {...state,cartItems:newData}
            }
        }
        case INCREASE_QUANTITY: {
            let productIndex = state.cartItems.findIndex(item=>item.key === action.payload.id && item.defaultColor===action.payload.color &&  item.size === action.payload.size);
            let product = state.cartItems[productIndex];
            if( product.quantity < 10 ){
                product.quantity = product.quantity+1;
            }
            return {...state,cartItems:[ ...state.cartItems.slice(0,productIndex),
                                         {...product},
                                          ...state.cartItems.slice(productIndex+1,state.cartItems.length)
             ]}
        }
        case DECREASE_QUANTITY: {
            let productIndex = state.cartItems.findIndex(item=>item.key === action.payload.id && item.defaultColor===action.payload.color &&  item.size === action.payload.size);
            let product = state.cartItems[productIndex];
            if( product.quantity > 0 ){
                product.quantity = product.quantity-1;
            }
            return {...state,cartItems:[ ...state.cartItems.slice(0,productIndex),
                                         {...product},
                                          ...state.cartItems.slice(productIndex+1,state.cartItems.length)
             ]}
        }
        case DELETE_PRODUCT: {
            let productIndex = state.cartItems.findIndex(item=>item.key === action.payload.id && item.defaultColor===action.payload.color &&  item.size === action.payload.size);
            let product = state.cartItems[productIndex];
            product.quantity = 0;
            return {...state,cartItems:[ ...state.cartItems.slice(0,productIndex),
                                          ...state.cartItems.slice(productIndex+1)
             ]}
        }
        case EMPTY_CART:{
            return {...state,cartItems:[]}
        }
        case CHANGE_COLOR:{
            let productIndex = state.cartItems.findIndex(item=>item.key === action.payload.id && item.defaultColor===action.payload.color &&  item.size === action.payload.size);
            let product = state.cartItems[productIndex];
            product.defaultColor = action.payload.changedColor;
            return {...state,cartItems:[ ...state.cartItems.slice(0,productIndex),
                {...product},
                 ...state.cartItems.slice(productIndex+1,state.cartItems.length)
            ]}
        }
        case SIZE_CHANGE:{
            let productIndex = state.cartItems.findIndex(item=>item.key === action.payload.id && item.defaultColor===action.payload.color &&  item.size === action.payload.size);
            let product = state.cartItems[productIndex];
            product.size = action.payload.changedSize;
            return {...state,cartItems:[ ...state.cartItems.slice(0,productIndex),
                {...product},
                 ...state.cartItems.slice(productIndex+1,state.cartItems.length)
            ]}
        }
        case ADD_ADDRESS:{
            return {...state,billing_address : action.payload.billing_address, 
                shipping_address : action.payload.shipping_address }
        }
        case ADD_ORDERS:{
            let newOrderData = [...state.orders,action.payload];
            return {...state,orders:newOrderData}
        }
        default:{
            return state;
        }
    }
}