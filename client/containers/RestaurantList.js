import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/searchActions';
import Restaurant from '../components/Restaurant';

class RestaurantList extends Component {
 	constructor(props) {
 		super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
 		this.state = {
      term: ''
    };
 	}

 	onInputChange(event) {
 		this.setState({ term: event.target.value });
 	}

 	onFormSubmit(event) {
 		event.preventDefault();
    const { fetchRestaurants } = this.props.searchActions;

 		fetchRestaurants(this.state.term);

 		this.setState({ term: '' });
 	}

 	render() {
 		let restaurant = this.props.restaurants.map(restaurant => {
 			return (
 				<Restaurant name={restaurant.name}/>
 			)
 		})

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
		 				value={this.state.term}
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

 function mapStateToProps(state){
   console.log('state in map', state);
   return {
     restaurants: state.searchReducer.businesses,
     searchErrorMsg: state.searchReducer.searchErrorMsg
   };
 }

 function mapDispatchToProps(dispatch) {
 	return {
 		searchActions: bindActionCreators(searchActions, dispatch)
 	};
 }

 export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
