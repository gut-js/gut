import React, { Component } from 'react';
import Map from './Map';
import { Button } from 'react-bootstrap';

class Restaurant extends Component {
  constructor(){
    super();
    this.getTopRestaurant = this.getTopRestaurant.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayTopRestaurant = this.displayTopRestaurant.bind(this);
  }

  componentWillMount(){
    const { fetchSnapPeaData } = this.props.dinerActions;
    const { diners } = this.props;

    fetchSnapPeaData(diners);
  }

  getTopRestaurant(){
    const { updateTopRestaurant } = this.props.dinerActions;

    updateTopRestaurant();
  }

  handleClick(e){
    e.preventDefault();
    const { updateTopRestaurant } = this.props.dinerActions;

    updateTopRestaurant();
  }

  displayTopRestaurant(){
    if (this.props.topRestaurant.name) {
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
    } else {
      return null;
    }
  }

  render(){
  	return (
  	 	<div>
        <h1>Results</h1>
        {this.displayTopRestaurant()}
  	 	</div>
 	  )
  }
}

export default Restaurant;
