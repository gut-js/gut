import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//Containers
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';

// const checkAuth = (nextState, replace) => {
// 	if(!localStorage.getItem('token')){
// 		replace({
// 			pathname: '/login'
// 		})
// 	}
// }

// <IndexRoute component={Profile} onEnter={checkAuth} />
// <Route path ='login' component={HomePage} />

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={HomePage} />
			<Route path='profile' component={Profile} />
	</Router>
);

export default routes;
