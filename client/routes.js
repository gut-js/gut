import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//Containers
import Main from './containers/Main';
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Diners from './containers/Diners';
import TopRestaurants from './containers/TopRestaurants';

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
			<Route path='toprestaurants' component={TopRestaurants} />
			<Route path='diners' component={Diners} />
		</Route>
	</Router>
);

export default routes;
