import {combineReducers} from 'redux'
import course  from './course.reducer';
import api from './api.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
	course,
	api,
	user
});

export default rootReducer;
