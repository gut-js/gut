export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';

export function fetchRestaurants(location) {
	console.log('fetchRestaurants location: ', location)
	return dispatch => {
		return fetch('http://localhost:5679/yelp?location='+ location, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}

		})
		.then(response => {
			return response.json();
		})
		.then(response => {
			console.log('response: ', response)
			dispatch(restaurantFetchSucess(response));
			// try{
			// 	if(response.success) {
			// 		dispatch(restaurantFetchSucess)
			// 	}
			// }
		})
	}
}

const restaurantFetchSucess = (info) => {
	return {
		type: FETCH_RESTAURANTS,
		info
	}
}