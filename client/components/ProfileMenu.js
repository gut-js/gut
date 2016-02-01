import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class ProfileMenu extends React.Component {
  constructor(){
    super();
    this.displayLocationChoice = this.displayLocationChoice.bind(this);
    this.displayFriends = this.displayFriends.bind(this);
  }

  displayLocationChoice(e){
    e.preventDefault();
    const { displayLocationChoice } = this.props.viewActions;
    const { username } = this.props;
    const { addToDiners } = this.props.dinerActions;

    addToDiners(username);
    displayLocationChoice();
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
            onClick={this.displayLocationChoice} />
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
