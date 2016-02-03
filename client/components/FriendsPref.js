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
    const { loadFriends } = this.props.friendActions;

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
    console.log('props in frenz pref', this.props);
    return (
      <div className='row'>
        <h1>Are you dining with anyone else?</h1>
        <SelectedFriends {...this.props} />
        <FriendsList {...this.props} />
        {this.displayButton()}
      </div>
    )
  }
}

export default FriendsPref;
