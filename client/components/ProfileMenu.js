import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class ProfileMenu extends React.Component {
  constructor(){
    super();
    this.displayLocationChoice = this.displayLocationChoice.bind(this);
    this.displayFriends = this.displayFriends.bind(this);
    this.displayPreferences = this.displayPreferences.bind(this);
  }

  displayLocationChoice(e){
    e.preventDefault();
    const { displayLocationChoice } = this.props.viewActions;
    const { username } = this.props;
    const { addToDiners } = this.props.dinerActions;
    const { clearDiners } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearFriends();
    addToDiners(username);
    displayLocationChoice();
  }

  displayFriends(){
    const { displayAddFriends } = this.props.viewActions;
    const { clearDiners } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearFriends();
    displayAddFriends();
  }

  displayPreferences(){
    const { displayMorePreferences } = this.props.viewActions;
    const { clearDiners } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearFriends();
    displayMorePreferences();
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          <h1>Lets Eat</h1>
          <img
            src='./../static/assets/placeholder.jpeg'
            alt='letseat'
            onClick={this.displayLocationChoice} />
        </div>
        <div className='col-md-4'>
          <h1>Friends</h1>
          <img
            src='./../static/assets/placeholder.jpeg'
            alt='addfriends'
            onClick={this.displayFriends} />
        </div>
        <div className ='col-md-4'>
          <h1>Repoll</h1>
          <img
            src='./../static/assets/placeholder.jpeg'
            alt='setpref'
            onClick={this.displayPreferences} />
        </div>
      </div>
    )
  }
}

export default ProfileMenu;
