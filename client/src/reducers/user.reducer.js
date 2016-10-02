import { API_CALL_STARTED, API_CALL_ENDED, USER_SIGNUP, SET_USER_DATA } from '../constants/constants';

const initialState = {}

function userReducer(state = initialState, action) {
	switch (action.type) {
    case API_CALL_STARTED:
      return Object.assign({}, state, {showLoader : true});
    case API_CALL_ENDED:
      return Object.assign({}, state, {showLoader : false});
		case SET_USER_DATA:
			return Object.assign({}, state, {data : action.payload});
		default:
			return state;
	}
}

export default userReducer;
