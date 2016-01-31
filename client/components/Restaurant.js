import React, { Component } from 'react';
import Map from './Map';
import {Button} from 'react-bootstrap';

class Restaurant extends Component {
  constructor(){
    super();
    this.getTopRestaurant = this.getTopRestaurant.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getTopRestaurant(){
    const { updateTopRestaurant } = this.props.dinerActions;
    updateTopRestaurant();
  }

  handleClick(e){
    e.preventDefault();
    console.log('this.props in handleClick ', this.props)
    const { updateTopRestaurant } = this.props.dinerActions;
    
    updateTopRestaurant();
    // need to rerender component somehow?
  }

  render(){
    console.log('this.props inside of render()', this.props);
  	return (
  	 	<div>
  	 		<h2>This is the best restaurant for you!</h2>
  	 		<h3>{this.props.topRestaurant.name}</h3>
  	 		<p>{this.props.topRestaurant.location.display_address[0]}</p>
  	 		<p>{this.props.topRestaurant.location.display_address[1]}</p>
  	 		<p>{this.props.topRestaurant.location.display_address[2]}</p>
  	 		<p>{this.props.topRestaurant.display_phone}</p>
  			<div style={{width:300, height:300}}>
      		<Map lat={this.props.topRestaurant.location.coordinate.latitude} lng={this.props.topRestaurant.location.coordinate.longitude}/>
          	</div>
          <Button>Peas get directions!</Button>
        	<Button onClick={this.handleClick}>Next restaurant</Button>
  	 	</div>
 	  )
  }
}

export default Restaurant;
