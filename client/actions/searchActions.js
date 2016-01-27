export const FETCH_RES_SUCCESS = 'FETCH_RES_SUCCESS';
export const FETCH_RES_ERR = 'FETCH_RES_ERR';

// Fetches restaurants on searchbar
export const fetchRestaurants = (location) => {
	return dispatch => {
		return fetch('http://localhost:5679/yelp?location=' + location, {
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
			console.log(response);
			try{
				if(!response.error){
					dispatch(restaurantFetchSucess(response));
				} else {
					dispatch(restaurantFetchError(response.error));
				}
			} catch(e){
				dispatch(restaurantFetchError(response.error));
      }
		})
	}
}

const restaurantFetchSucess = (info) => {
	return {
		type: FETCH_RES_SUCCESS,
		info
	}
}

const restaurantFetchError = (err) => {
	return {
		type: FETCH_RES_ERR,
		err
	}
}
