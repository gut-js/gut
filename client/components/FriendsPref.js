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
        <Button id='dine-alone' onClick={this.displayRestaurantResults}>Find us a table</Button>
      )
    } else {
      return(
        <Button id='dine-alone' onClick={this.displayRestaurantResults}>Table for one</Button>
      )
    }
  }

  render(){
    if (this.props.location) {
      return (
        <div className='add-user-container col-md-12 col-xl-12'>
          <div className='row'>
            <div className='add-friends col-sm-12 col-md-6 col-xl-6'>
              <h1>Select <span className='cursive'>pea-ps</span> to dine with</h1>
              {this.displayButton()}
              <SelectedFriends {...this.props} />
            </div>
            <div className='user-friends col-sm-12 col-md-6 col-xl-6'>
              <FriendsList {...this.props} />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='spinner'>
          <h1>Determining your <span className='cursive'>location</span>...</h1>
          <image src='./../static/assets/spinner.gif' />
        </div>
      )
    }
  }
}

export default FriendsPref;
