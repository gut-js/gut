import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class Menu extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log('inside handleClick. these are the props', this.props)
    e.preventDefault();
    const {addToDiners} = this.props.dinerActions;
    addToDiners(this.props.username);
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

export default Menu;
