import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import magellan from 'magellan-coords';
import config from './../../server/config.js';

//Components
import Map from './Map';
import UberInfo from './UberInfo';

class RestaurantPref extends React.Component {
  constructor(){
    super();
    this.openUberModal = this.openUberModal.bind(this);
    this.closeUberModal = this.closeUberModal.bind(this);
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.displayLoadingSpinner = this.displayLoadingSpinner.bind(this);
    this.displayTopRestaurant = this.displayTopRestaurant.bind(this);
    this.state = {
      showSignInModal: false,
      showRegisterModal: false
    }
  }

  componentWillMount(){
    const { fetchSnapPeaData } = this.props.dinerActions;
    const { diners, location } = this.props;

    fetchSnapPeaData(diners, location);
  }

  openUberModal(){
    this.setState({
      showUberModal: true
    })
  }

  closeUberModal(){
    this.setState({
      showUberModal: false
    })
  }

  selectRestaurant(){
    const { username } = this.props;
    const { addToHistory } = this.props.dinerActions;
    const { name, id } = this.props.topRestaurant;
    const restaurantInfo = {
      username: username,
      restaurantName: name,
      restaurantId: id,
      date: new Date()
    }

    addToHistory(restaurantInfo);
  }

  selectNext(e){
    e.preventDefault();
    const { updateTopRestaurant } = this.props.dinerActions;
    const { fetchUberData } = this.props.dinerActions;
    const { clearUberData } = this.props.dinerActions;

    this.setState({
      isFetchingUberData: true
    })


    updateTopRestaurant();
    clearUberData();
    fetchUberData(this.props.topRestaurant.location.coordinate.latitude, this.props.topRestaurant.location.coordinate.longitude)
  }

  displayLoadingSpinner(){
    if(this.props.isLoadingResults){
      return (
        <div>
          <h1>Our algorithm is crunching numbers. Your recommendation will be ready in a snap!</h1>
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

    // convert coordinates to DMS format
    let startLat = this.props.location[0].toString();
    let startLng = this.props.location[1].toString();

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
      let categories = this.props.topRestaurant.categories.map(function(cat){
        return cat[0];
      }).join(', ')

      let reviews = 'reviews';
      if (this.props.topRestaurant.review_count === 1) {
        reviews = 'review'
      }

      return (
        <div>
          <Button onClick={this.selectRestaurant}>Select Restaurant</Button>
          <Button onClick={this.selectNext}>Next suggestion</Button>
          <h4>Based on your input, we think you'll really like eating at...</h4>
          <a href={this.props.topRestaurant.url} target='_blank'>
            <h4>{this.props.topRestaurant.name}</h4>
          </a>
          <p><img src={this.props.topRestaurant.rating_img_url_large}/> {this.props.topRestaurant.review_count} {reviews}</p>
          <p>{categories}</p>
          <img src={this.props.topRestaurant.image_url}/>
          <p>
            {this.props.topRestaurant.location.display_address[0]}<br/>
            {this.props.topRestaurant.location.display_address[1]}<br/>
            {this.props.topRestaurant.location.display_address[2]}
          </p>
          <a href={directionsUrl} target='_blank'>
            <Button>
              Peas get directions!
            </Button>
          </a>
          <Button onClick={this.openUberModal}>
            <img src='./../static/assets/UBER_API_Badges_1x_22px.png' />    Ride there with Uber
            <UberInfo
              {...this.props}
              showUberModal={this.state.showUberModal}
              closeUberModal={this.closeUberModal} />
          </Button>
          <div style={{width:300, height:300}}>
            <Map lat={this.props.topRestaurant.location.coordinate.latitude} lng={this.props.topRestaurant.location.coordinate.longitude}/>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  render(){
  	return (
  	 	<div>
        {this.displayLoadingSpinner()}
        {this.displayTopRestaurant()}
  	 	</div>
 	  )
  }
}

export default RestaurantPref;
