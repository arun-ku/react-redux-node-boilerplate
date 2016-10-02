import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../actions/user.actions';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import * as UserService from '../services/UserService';

require('../styles/style.scss');

class Login extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			email : '',
			password : ''
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
		this.props.dispatch(login(this.state));
	}
	socialLogin(provider){
		window.location.href = '/auth/'+provider;
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
					<LoginForm user={this.state} onChange={this.onChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
				</div>
				<div className="social-login-wrapper">
					<div className="social-login" onClick={this.socialLogin.bind(this, 'facebook')}>
						<img  src={'../assets/images/facebook_logo.png'} />
						<span>Login with Facebook</span>
					</div>
					<div className="social-login" onClick={this.socialLogin.bind(this, 'google')}>
						<img  src={'../assets/images/google_logo.jpg'} />
						<span>Login with Google</span>
					</div>
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

export default connect(mapStateToProps)(Login);
