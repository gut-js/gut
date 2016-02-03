import React from 'react';
import { Button } from 'react-bootstrap';
import magellan from 'magellan-coords';

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

    // format start location for direction url
    let destination = '';
    this.props.topRestaurant.location.display_address.forEach(function (line, index, array) {
      destination = destination.concat(line)
      if (array[++index]) {
        destination = destination.concat(' ')
      }
    })
    destination = destination.replace(/\s/g, '+');

    // convert coords
    // TODO: remove hard-coded lat, lng
    let startLat = '34.019383',
        startLng = '-118.494491';

    if (startLat.charAt(0) === '-') {
      startLat = '-' + magellan(startLat.slice(1)).toDMS()
    } else {
      startLat = magellan(startLat).toDMS()
    }

    if (startLng.charAt(0) === '-') {
      startLng = '-' + magellan(startLng.slice(1)).toDMS()
    } else {
      startLng = magellan(startLng).toDMS()
    }

    let startLoc = startLat + ',' + startLng;

    let directionsUrl = 'https://www.google.com/maps/dir/' + startLoc + '/' + destination;

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
          <a href={directionsUrl} target='_blank'>
            <Button>Peas get directions!</Button>
          </a>
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
