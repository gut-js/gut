import React from 'react';
import { Route, IndexRoute } from 'react-router';

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

export default (
	<Route path="/" component={HomePage}>

	</Route>
);
