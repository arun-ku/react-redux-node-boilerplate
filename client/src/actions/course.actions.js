import {
	LOAD_COURSE,
	COURSE_LOADED,
	LOADING,
	LOADED
} from '../constants/constants';

import axios from 'axios';

import CourseApi from '../api/mockCourseApi';

export function loadCourse() {
	return {
		type: LOAD_COURSE
	}
}

export function courseLoaded(courses) {
	return {
		type: COURSE_LOADED,
		courses
	}
}

export function showLoader() {
	console.log('showing loader')
	return {
		type: LOADING
	}
}
export function hideLoader() {
	console.log('hiding loader')
	return {
		type: LOADED
	}
}

export function fetchCourse() {
	return (dispatch) => {
		dispatch(showLoader());
		return axios.get('/api/users')
		.then((response) => {
			console.log(response)
			setTimeout(()=>{
				dispatch(hideLoader());
				dispatch(courseLoaded(response.data.data));
			},3000);
		}).catch((err)=> {
			dispatch(hideLoader());
		});
	}
}
