import { ADD_AMOUNT_DETAILS } from './ActionTypes/cartActionTypes';

const amountOfOrder = {
    "totalCost" : 0,
    "amountToPay" : 0,
    "discount" : 0,
    "promocode" : "",
    "shipping" : 0
}

const initialState = {
    data : amountOfOrder,
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_AMOUNT_DETAILS:{
            console.log("##########", action.payload.discount);
            state.data.totalCost = action.payload.totalCost;
            state.data.amountToPay = action.payload.amountToPay;
            state.data.discount = action.payload.discount;
            state.data.promocode = action.payload.promocode;
            state.data.shipping = action.payload.shipping;

            return state;
        }
        default:{
            return state;
        }
    }
}