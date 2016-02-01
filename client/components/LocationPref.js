import React from 'react';
import { Button } from 'react-bootstrap';

class LocationPref extends React.Component{
  constructor(){
    super();
    this.displayFriendsChoice = this.displayFriendsChoice.bind(this);
  }

  displayFriendsChoice(){
    const { displayFriendsChoice } = this.props.viewActions;

    displayFriendsChoice();
  }

  render(){
    return(
      <div>
        <h1>Please Choose Your Location</h1>
        <Button onClick={this.displayFriendsChoice}>Current Location
        </Button>
      </div>
    )
  }
}

export default LocationPref;
