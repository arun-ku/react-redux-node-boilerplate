import React, {Component} from 'react';
import {connect} from 'react-redux'

import CourseList from './course.list.component';

import {fetchCourse} from '../actions/course.actions';



class Course extends Component {
	constructor(props, context){
		super(props, context);
		props.dispatch(fetchCourse());
	}
	render() {
		const {courses, fetching} = this.props;
		return (
			<div>
				{fetching ? <div className="loader">LOADING.....</div> : ''}
				<CourseList courses={courses} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, "state+++++")
	return {
		courses: state.course,
		fetching: state.api.fetching
	}
}

export default connect(mapStateToProps)(Course);
