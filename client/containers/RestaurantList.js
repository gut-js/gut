import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/searchActions';
import Restaurant from '../components/Restaurant';

class RestaurantList extends Component {
 	constructor(props) {
 		super(props);
 
 		this.state = { term: '' };
 
 		this.onInputChange = this.onInputChange.bind(this);
 		this.onFormSubmit = this.onFormSubmit.bind(this);
 	}
 
 	onInputChange(event) {
 		this.setState({ term: event.target.value });
 	}
 
 	onFormSubmit(event) {
 		event.preventDefault();
 
 		//fetch restaurant data
 		this.props.searchActions.fetchRestaurants(this.state.term);
 		this.setState({ term: '' });
 
 
 	}
 
 	render() {
 		let restaurant = this.props.restaurants.map(function(restaurant) {
 			return (
 				<Restaurant name={restaurant.name}/>
 			)
 		})
 		console.log('this.props in restaurantlist: ', this.props);
 		return (
 			<div>
		 		<form onSubmit={this.onFormSubmit} className='input-group'>
		 			<input 
		 				placeholder="Find a restaurant in your favorite city"
		 				className="form-control"
		 				value={this.state.term}
		 				onChange={this.onInputChange}/>
		 				}
		 			<span className="input-group-btn">
		 				<button type="submit" className="btn btn-secondary">Submit</button>
		 			</span>
		 		</form>
		 		{restaurant}
	 		</div>
 		)
 	}
 }
 function mapStateToProps(state){
 	console.log('restaurantlist state: ', state);
   return { restaurants: state.searchReducer };
 }

 function mapDispatchToProps(dispatch) {
 	return {
 		searchActions: bindActionCreators(searchActions, dispatch)
 	};
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList); 