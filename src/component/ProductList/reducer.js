import data from '../../json/product';
import { CHANGE_COLOR } from '../ColorList/ColorListActionTypes';
import { CHANGE_SIZE } from '../../Reducer/ActionTypes/cartActionTypes';

const initialState = {
    data : {...data,images:[...data.images],thumb:[...data.thumb]}
}

export default (state = initialState, action) => {
    console.log('show prduct reeducer');
    switch(action.type){
        
        case CHANGE_COLOR:{
            const changedData = state.data.thumb.map(item => 
                {
                    if(item.key === action.payload.id){
                        console.log("########",item.defaultColor);
                        item.defaultColor = action.payload.color;
                        return item;
                        // return {
                        //     ...item,
                        //     defaultColor: action.payload.color
                        // };
                    }
                    return item;
                }
              );
              
              return {data : { ...state.data, thumb: [...changedData]}};
        }
        case CHANGE_SIZE:{
            const changedData = state.data.thumb.map(item => 
                {
                    if(item.key === action.payload.id){
                        return {
                            ...item,
                            size: action.payload.size
                        };
                    }
                    return item;
                }
              );
              
              return {data : { ...state.data, thumb: [...changedData]}};
        }
  
        default:{
            console.log('default')
            return state;
        }
    }
}