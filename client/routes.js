import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//Containers
import Main from './containers/Main';
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';

const checkAuth = (nextState, replace) => {
	console.log(nextState);
	// if(!localStorage.getItem('token')){
	// 	replace({
	// 		pathname: '/login'
	// 	})
	// }
}

// <IndexRoute component={Profile} onEnter={checkAuth} />
// <Route path ='login' component={HomePage} />

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomePage} onEnter={checkAuth} />
			<Route path='profile' component={Profile} />
		</Route>
	</Router>
);

export default routes;
