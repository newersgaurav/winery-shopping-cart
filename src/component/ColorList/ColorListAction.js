import { CHANGE_COLOR } from './ColorListActionTypes';

const changeColor = ( data ) => ({
    type : CHANGE_COLOR,
    payload: data,
})

export {
    changeColor,
}