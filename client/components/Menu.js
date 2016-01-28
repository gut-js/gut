import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class Menu extends React.Component {
  render(){
    return(
      <div>
        <h1>MENU</h1>
        <div>
          <ButtonGroup vertical block>
            <Button>Lets Eat!</Button>
            <Button>Add Friend</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default Menu;
