import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as UserService from '../services/UserService';
import { getUserData, logoutUser } from '../actions/user.actions'


import {Link} from 'react-router';
require('../styles/style.scss')

class App extends Component {
	constructor(props){
		super(props);
		if(UserService.isLoggedIn()){
			props.dispatch(getUserData());
		}
	}

	handleLogout(){
		this.props.dispatch(logoutUser());
	}

	render() {
		if(!UserService.isLoggedIn()){
			var navbarContent = (
				<div>
					<Link className="links" to={'/'}>Home</Link>
					<Link className="links" to={'/register'}>Register</Link>
					<Link className="links" to={'/login'}>Login</Link>
				</div>
			);
		}else{
			var navbarContent = (
				<div>
					<span>Hello {this.props.user && this.props.user.data && this.props.user.data.fullName || 'Unknown User Whose name we missed somehow'}. Welcome to the Boiler Plate.</span>
					<button className='logout-btn' onClick={this.handleLogout.bind(this)}>Logout</button>
				</div>
			);
		}
		return (
			<div>
				<div className="navbar">
					{navbarContent}
				</div>
				<div className="children">
				{
					this.props.children
				}
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

export default connect(mapStateToProps)(App);
