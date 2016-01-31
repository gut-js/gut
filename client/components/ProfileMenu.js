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
    return(
      <div>
        <ButtonGroup vertical block>
          <Button onClick={this.handleClick}>Lets Eat!</Button>
          <Button>Add Friend</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default ProfileMenu;
