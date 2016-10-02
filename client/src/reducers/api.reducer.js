import { LOADING, LOADED } from '../constants/constants';

const initialState = {}

function apiReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return {fetching: true};
		case LOADED:
			return {fetching: false};
		default:
			return state;
	}
}

export default apiReducer;