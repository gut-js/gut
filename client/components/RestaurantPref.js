import React from 'react';
import { Button } from 'react-bootstrap';

//Components
import Map from './Map';

class RestaurantPref extends React.Component {
  constructor(){
    super();
    this.selectNext = this.selectNext.bind(this);
    this.displayLoadingSpinner = this.displayLoadingSpinner.bind(this);
    this.displayTopRestaurant = this.displayTopRestaurant.bind(this);
  }

  componentWillMount(){
    const { fetchSnapPeaData } = this.props.dinerActions;
    const { diners } = this.props;

    fetchSnapPeaData(diners);
  }

  selectNext(e){
    e.preventDefault();
    const { updateTopRestaurant } = this.props.dinerActions;
    const { recommendations } = this.props;

    updateTopRestaurant();
  }

  displayLoadingSpinner(){
    if(this.props.isLoadingResults){
      return (
        <div>
          <h1>Our algorithm is crunching numbers. Your recommendation will be ready in snap!</h1>
          <image src='./../static/assets/spinner.gif' />
        </div>
      )
    } else {
      return null;
    }
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
          <Button onClick={this.selectNext}>Next restaurant</Button>
        </div>
      )
    } else {
      return null;
    }
  }

  render(){
    console.log('props in res pref', this.props);
  	return (
  	 	<div>
        <h1>Results</h1>
        {this.displayLoadingSpinner()}
        {this.displayTopRestaurant()}
  	 	</div>
 	  )
  }
}

export default RestaurantPref;
