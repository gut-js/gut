import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class FriendsPref extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const { displayResults } = this.props.viewActions;

    displayResults();
  }

  render(){
    return (
      <div className='row'>
        <h1>Select who youd like to eat with</h1>
        <Button onClick={this.handleClick}>Eat with Hoon</Button>
      </div>
    )
  }
}

export default FriendsPref;
