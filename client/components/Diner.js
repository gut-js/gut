import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Diner extends React.Component {
  constructor(){
    super();
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  getRecommendations(){
    console.log('inside getRecommendations');
    console.log('not receiving props yet.. need to map dispatchToProps in container diner.js');
    const {fetchSnapPeaData} = this.props.dinerActions;
    fetchSnapPeaData(this.props.diners, this.props.location);
  }

  render(){
    return (
      <div>
        <Button onClick={this.getRecommendations()}>Eat alone :)</Button>
      </div>
    )
  }
}

export default Diner;

// we dont know what to put inside Button onClick to take it to the restaurant component