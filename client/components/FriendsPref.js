import React from 'react';
import { Button } from 'react-bootstrap';

//Components
import FriendsList from './FriendsList';
import SelectedFriends from './SelectedFriends';

class FriendsPref extends React.Component {
  constructor(){
    super();
    this.displayRestaurantResults = this.displayRestaurantResults.bind(this);
    this.displayButton = this.displayButton.bind(this);
  }

  componentWillMount(){
    const { username } = this.props;
    const { addToDiners } = this.props.dinerActions;
    const { loadFriends } = this.props.friendActions;

    addToDiners(username);
    loadFriends(username);
  }

  displayRestaurantResults(e){
    e.preventDefault();
    const { displayResults } = this.props.viewActions;

    displayResults();
  }

  displayButton(){
    const { diners } = this.props;

    if(diners.length > 1){
      return(
        <Button onClick={this.displayRestaurantResults}>Find us a restaurant!</Button>
      )
    } else {
      return(
        <Button onClick={this.displayRestaurantResults}>Table for one, please!</Button>
      )
    }
  }

  render(){
    if (this.props.location) {
      return (
        <div className='row'>
          <h1>Are you dining with anyone else?</h1>
          <SelectedFriends {...this.props} />
          <FriendsList {...this.props} />
          {this.displayButton()}
        </div>
      )
    } else {
      return (
        <div>
          <h3>Determining your location...</h3>
          <image src='./../static/assets/spinner.gif' />
        </div>
      )
    }
  }
}

export default FriendsPref;
