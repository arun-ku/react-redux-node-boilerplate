import React, {Component} from 'react';
import classNames from 'classnames';

export default class CourseList extends Component {
	render() {
		return (
			<div>
			{
				this.props.courses.map((course) => {
					return(
						<div key={course.id} className="post-container color-red">
							<h3 className="post-header">{course.id}. {course.title}</h3>
							<div className="post-body">{course.body}</div>
						</div>
					)
				})
			}
			</div>
		);
	}
}
