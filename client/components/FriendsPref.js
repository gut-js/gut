import React from 'react';
import { Button } from 'react-bootstrap';

//Components
import FriendsList from './FriendsList';

class FriendsPref extends React.Component {
  constructor(){
    super();
    this.displayRestaurantResults = this.displayRestaurantResults.bind(this);
  }

  componentWillMount(){
    const { username } = this.props;
    const { loadFriends } = this.props.friendActions;

    loadFriends(username);
  }

  displayRestaurantResults(e){
    e.preventDefault();
    const { displayResults } = this.props.viewActions;

    displayResults();
  }

  render(){
    return (
      <div className='row'>
        <h1>Select who youd like to eat with</h1>
        <Button onClick={this.displayRestaurantResults}>Dining Alone</Button>
        <FriendsList {...this.props}/>
      </div>
    )
  }
}

export default FriendsPref;
