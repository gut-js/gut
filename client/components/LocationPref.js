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
    const { displayFriendsChoice } = this.props.viewActions;

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
      <div>
        <h1>Please Choose Your Location</h1>
        <button
          type='submit'
          className='btn btn-block'
          onClick={this.useCurrentLocation}>
          Current Location
        </button>
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
    )
  }
}

export default LocationPref;
