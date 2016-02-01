import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class FriendsPref extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    let username = this.props.username;
    console.log('this.props: ', this.props);
    const { addToDiners } = this.props.dinerActions;
    addToDiners(username);
    const { displayResults } = this.props.viewActions;

    displayResults();
  }

  render(){
    return (
      <div className='row'>
        <h1>Select who youd like to eat with</h1>
        <Button onClick={this.handleClick}>Eat with Self</Button>
      </div>
    )
  }
}

export default FriendsPref;
