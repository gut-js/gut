import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class FriendsPref extends React.Component {
  constructor(){
    super();
    this.getRecommendations = this.getRecommendations.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const { fetchSnapPeaData } = this.props.dinerActions;
    const { diners, username } = this.props;
    const { displayResults } = this.props.viewActions;

    fetchSnapPeaData(diners);
    displayResults();
  }

  getRecommendations(){
    console.log('inside getRecommendations');
    console.log('not receiving props yet.. need to map dispatchToProps in container diner.js', this.props);
    const { fetchSnapPeaData } = this.props.dinerActions;
    const { diners, location } = this.props;

    fetchSnapPeaData(diners, location);
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
