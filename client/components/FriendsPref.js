import React from 'react';
import { Button } from 'react-bootstrap';

class FriendsPref extends React.Component {
  constructor(){
    super();
    this.displayRestaurantResults = this.displayRestaurantResults.bind(this);
  }

  displayRestaurantResults(e){
    e.preventDefault();
    const { displayResults } = this.props.viewActions;

    displayResults();
  }

  render(){
    console.log('props in friends pref', this.props);
    return (
      <div className='row'>
        <h1>Select who youd like to eat with</h1>
        <Button onClick={this.displayRestaurantResults}>Eat with Hoon</Button>
      </div>
    )
  }
}

export default FriendsPref;
