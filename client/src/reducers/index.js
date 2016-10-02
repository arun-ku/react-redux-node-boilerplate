import {combineReducers} from 'redux'
import course  from './course.reducer';
import api from './api.reducer';
import user from './user.reducer'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
	course,
	api,
	user
});

export default rootReducer;
