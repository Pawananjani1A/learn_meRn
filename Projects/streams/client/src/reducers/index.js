import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';

export default combineReducers({
    authReducer:authReducer,
    //Acessing the pre-built reducer from redux-form
    form:formReducer
});