import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//Containers
import Main from './containers/Main';
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';

const checkAuth = (nextState, replace) => {
	if(localStorage.getItem('token')){
		replace({
			pathname: '/profile'
		})
	}
}

const checkAuthProfile = (nextState, replace) => {
	if(!localStorage.getItem('token')){
		replace({
			pathname: '/'
		})
	}
}

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomePage} onEnter={checkAuth} />
			<Route path='profile' onEnter={checkAuthProfile} component={Profile} />
		</Route>
	</Router>
);

export default routes;
