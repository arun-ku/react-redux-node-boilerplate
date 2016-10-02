import React, {Component} from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createUser } from '../actions/user.actions'
import HomePage from './HomePage';
import * as UserService from '../services/UserService';

class Register extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			fullName : '',
			email : '',
			password : '',
			confirmPassword : ''
		}
	}
	onChange(e){
		var change = {};
		change[''+e.target.name] = e.target.value;
		var newState = Object.assign({}, this.state, change);
		this.setState(newState);
	}
	handleSubmit(e){
		e.preventDefault();
		console.log(this.props)
		this.props.dispatch(createUser(this.state))
	}

	componentWillUpdate(nextProps, nextState) {
		if(UserService.isLoggedIn()){
		 browserHistory.push(HomePage);
	 }
	}

	render() {
		return (
			<div>
				<div className="shadow-box shadow-effect signup-form-box">
				<SignUpForm user={this.state} onChange={this.onChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, "state+++++")
	return {
		user : state.user
	};
}

export default connect(mapStateToProps)(Register);
