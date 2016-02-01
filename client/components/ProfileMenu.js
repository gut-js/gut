import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class ProfileMenu extends React.Component {
  constructor(){
    super();
    this.displayEatOptions = this.displayEatOptions.bind(this);
    this.displayFriends = this.displayFriends.bind(this);
  }

  displayEatOptions(e){
    e.preventDefault();
    const { addToDiners } = this.props.dinerActions;
    const { username } = this.props;
    const { displayFriendsChoice } = this.props.viewActions;

    addToDiners(username);
    displayFriendsChoice();
  }

  displayFriends(){
    const { displayAddFriends } = this.props.viewActions;

    displayAddFriends();
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-6'>
          <h1>Lets Eat</h1>
          <img
            src='./../static/assets/placeholder.jpeg'
            alt='letseat'
            onClick={this.displayEatOptions} />
        </div>
        <div className='col-md-6'>
          <h1>Add Friends</h1>
          <img
            src='./../static/assets/placeholder.jpeg'
            alt='addfriends'
            onClick={this.displayFriends} />
        </div>
      </div>
    )
  }
}

export default ProfileMenu;
