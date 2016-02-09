import React from 'react';
import { Button } from 'react-bootstrap';

class LocationPref extends React.Component{
  constructor(){
    super();
    this.useCurrentLocation = this.useCurrentLocation.bind(this);
    this.useCustomLocation = this.useCustomLocation.bind(this);
  }

  componentDidMount(){
    const input = this.refs.startLocation;
    const autocomplete = new google.maps.places.Autocomplete(input);
  }

  useCurrentLocation(){
    const { setUserLocation } = this.props.dinerActions;
    const { displayFriendsChoice } = this.props.viewActions;

    navigator.geolocation.getCurrentPosition(function(position) {
      let userLatitude = position.coords.latitude;
      let userLongitude = position.coords.longitude;
      setUserLocation([userLatitude, userLongitude])
    })
    displayFriendsChoice();
  }

  useCustomLocation(e){
    e.preventDefault();
    const { setUserLocation } = this.props.dinerActions;
    const { displayFriendsChoice } = this.props.viewActions;
    const location = this.refs.startLocation.value;

    setUserLocation(location);
    this.refs.startLocation.value = '';
    displayFriendsChoice();
  }

  render(){
    return(
      <div >
      <div className='row location-pref'>
        <div className='enter-location col-sm-12 col-md-5'>
            <img src='./../static/assets/snap_pea_pea.png' />
            <div className='location-text-container'>
              Enter a location
            </div>
            <div className='input-container'>
            <form>
              <div className='form-group'>
                <input
                type='text'
                className='form-control'
                ref='startLocation'
                placeholder='Enter a location' />
                <button
                type='submit'
                className='btn btn-block'
                onClick={this.useCustomLocation}>
                Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='current-location col-sm-12 col-md-5 col-md-push-1'>
          <img src='./../static/assets/snap_pea_pea.png' />
          <div className='location-text-container'>
            Use your current location
          </div>
          <div className='input-container'>
          <button
            type='submit'
            className='btn btn-block'
            onClick={this.useCurrentLocation}>
            Current Location
          </button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default LocationPref;
