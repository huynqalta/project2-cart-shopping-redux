import * as types from '../constants/actionType'
import * as mess from '../constants/Messages'

var inittialState=mess.MSG_WELLCOME;

const message=(state=inittialState,action)=>{
 
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message
        default: return [...state];
    }
}

export default message;
