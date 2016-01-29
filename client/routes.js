import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//Containers
import Main from './containers/Main';
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Restaurant from './components/Restaurant';
<<<<<<< 10b64254970b5a35ec61d5c7b5c643e7fe0d54a1
import Diners from './containers/Diners';
=======
import Diner from './components/Diner';
>>>>>>> [pull] sets up diner page (for user to set number of diners)

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
			<Route path='restaurant' component={Restaurant} />
<<<<<<< 10b64254970b5a35ec61d5c7b5c643e7fe0d54a1
			<Route path='diners' component={Diners} />
=======
			<Route path='diners' component={Diner} />
>>>>>>> [pull] sets up diner page (for user to set number of diners)
		</Route>
	</Router>
);

export default routes;
