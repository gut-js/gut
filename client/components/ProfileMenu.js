import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class ProfileMenu extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const { addToDiners } = this.props.dinerActions;
    const { username } = this.props;

    addToDiners(username);
  }

  render(){
    console.log('profilemenu props', this.props);
    return(
      <div className='row'>
        <div className='col-md-6'>
          <h1>Lets Eat</h1>
          <img
            src='./../static/assets/placeholder.jpeg'
            alt='letseat'
            onClick={this.handleClick} />
        </div>
        <div className='col-md-6'>
          <h1>Add Friends</h1>
          <img
            src='./../static/assets/placeholder.jpeg'
            alt='addfriends' />
        </div>
      </div>
    )
  }
}

export default ProfileMenu;
