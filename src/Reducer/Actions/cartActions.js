import { 
    ADD_TO_CART , 
    CHANGE_SIZE , 
    EMPTY_CART, 
    INCREASE_QUANTITY , 
    DECREASE_QUANTITY , 
    DELETE_PRODUCT,
    CHANGE_COLOR ,
    SIZE_CHANGE ,
    ADD_ADDRESS ,
    ADD_AMOUNT_DETAILS ,
    ADD_ORDERS } from '../ActionTypes/cartActionTypes'; 

const addToCart = ( data ) => ({
    type : ADD_TO_CART,
    payload: data,
})

const changeSize = ( data ) => ({
    type : CHANGE_SIZE,
    payload: data,
})

const sizeChange = (data) => ({
    type: SIZE_CHANGE,
    payload: data,
})

const changeColor = ( data ) => ({
    type : CHANGE_COLOR,
    payload: data,
})

const emptyCart = () =>({
    type : EMPTY_CART
})

const increaseQuantity = (data) => ({
    type : INCREASE_QUANTITY,
    payload: data,
})

const decreaseQuantity = (data) => ({
    type : DECREASE_QUANTITY,
    payload: data,
})

const deleteProduct = (data) => ({
    type : DELETE_PRODUCT,
    payload: data,
})

const addAddress = ( data ) => ({
    type : ADD_ADDRESS,
    payload: data,
})

const addAmountDetails = ( data ) => ({ 
    type : ADD_AMOUNT_DETAILS,
    payload : data,
})

const addOrders = ( data ) => ({
    type : ADD_ORDERS,
    payload : data,
})

export {
    addToCart,
    changeSize,
    emptyCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeColor,
    sizeChange,
    addAddress,
    addAmountDetails,
    addOrders,
}