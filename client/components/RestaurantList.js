import React, { Component } from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends Component {
 	constructor(props) {
 		super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
 		this.state = {
      searchInput: ''
    };
 	}

 	onInputChange(event) {
 		this.setState({ searchInput: event.target.value });
 	}

 	onFormSubmit(event) {
 		event.preventDefault();
    const { fetchRestaurants } = this.props.searchActions;

 		fetchRestaurants(this.state.searchInput);

 		this.setState({ searchInput: '' });
 	}

 	render() {
 		let restaurant = this.props.restaurant ? this.props.restaurant.map((restaurant, index) => {
 			return (
 				<Restaurant
          name={restaurant.name}
          key={index} />
 			)
 		}) : null;

    let searchError = this.props.searchErrorMsg ? (
      <p>
        No Restaurants Found!
      </p>) : null;

 		return (
 			<div>
		 		<form onSubmit={this.onFormSubmit} className='input-group'>
		 			<input
		 				placeholder="Find a restaurant in your favorite city"
		 				className="form-control"
		 				value={this.state.searchInput}
		 				onChange={this.onInputChange}/>
		 			<span className="input-group-btn">
		 				<button type="submit" className="btn btn-secondary">Submit</button>
		 			</span>
		 		</form>
        {searchError}
		 		{restaurant}
	 		</div>
 		)
 	}
 }

 export default RestaurantList;
