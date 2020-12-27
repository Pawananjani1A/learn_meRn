import _ from 'lodash';

import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';



//FETCH_STREAMS has a little bit of lodash syntax to convert the incoming array of streams to object of streams
//Again, DELETE_STREAM has some lodash syntax as well to return the state without the element having id==action.payload
//All other cases just update the state with the incoming stream = action.payload and then return the state.

const streamReducer = (state={},action)=>{
  
    switch (action.type)
    {   case FETCH_STREAMS:
            return {...state,..._.mapKeys(action.payload,'id')};
        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case EDIT_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case DELETE_STREAM:
            return _.omit(state,action.payload);
        default:return state;
    }
};


export default streamReducer;