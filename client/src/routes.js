import React from 'react';
import {Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Course from './components/Course';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Nest from './components/Nest';
import * as UserService from './services/UserService';

function someFunction(nextState, replace){
	if(UserService.isLoggedIn()){
		replace({
			pathName : '/'
		});
 }
}

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="course" component={Course} />
		<Route path="register" component={Register} onEnter={someFunction}/>
		<Route path="login" component={Login} onEnter={someFunction}/>
	</Route>
)
