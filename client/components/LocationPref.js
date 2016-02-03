import React from 'react';
import { Button } from 'react-bootstrap';

class LocationPref extends React.Component{
  constructor(){
    super();
    this.displayFriendsChoice = this.displayFriendsChoice.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const input = this.refs.startLocation;
    const autocomplete = new google.maps.places.Autocomplete(input);
  }

  displayFriendsChoice(){
    const { displayFriendsChoice } = this.props.viewActions;

    displayFriendsChoice();
  }

  handleClick(e){
    e.preventDefault();
    const location = this.refs.startLocation.value;

    console.log(location);
  }

  render(){
    return(
      <div>
        <h1>Please Choose Your Location</h1>
        <button
          type='submit'
          className='btn btn-block'
          onClick={this.displayFriendsChoice}>
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
              onClick={this.handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LocationPref;
