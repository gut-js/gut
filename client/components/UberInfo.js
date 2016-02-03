import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class UberInfo extends React.Component {
  constructor(){
    super();

    this.state = {
      isFetchingUberData: false
    }

    this.displayUberSpinner = this.displayUberSpinner.bind(this);
    this.displayUberInfo = this.displayUberInfo.bind(this);
  }

  componentWillMount(){
    const { fetchUberData } = this.props.dinerActions;

    this.setState({
      isFetchingUberData: true
    })

    fetchUberData(this.props.topRestaurant.location.coordinate.latitude, this.props.topRestaurant.location.coordinate.longitude)
  }

  componentWillReceiveProps(){
    const { displayUberInfo } = this.props.viewActions;

    this.setState({
      isFetchingUberData: false
    })

    displayUberInfo();
  }

  componentDidUpdate(){
    console.log('i am being called after uber data is received', this.props.uberData);
  }

  displayUberSpinner(){
    console.log('displayUberSpinner outside if', this.props.isLoadingUberData)
    if(this.props.isLoadingUberData){
      console.log('YOU SHOULD SEE displayUberSpinner')
      return (
        <div>
          <h1>Retrieving real-time Uber info...</h1>
          <image src='./../static/assets/spinner.gif' />
        </div>
      )
    } else {
      return null;
    }
  }

  displayUberInfo(){
    if(this.props.uberData.prices){
      console.log('hello daisy')
      console.log(this.props.uberData)
      let fareInfo = this.props.uberData.prices.map(function(price) {
        return (
          <div>
            {price.display_name} - {price.estimate}
          </div>
        )
      })
      return (
        <div>
          <h6>Fare estimates:</h6>
          {fareInfo}
          <Button>Request Uber Ride</Button>
        </div>
      )
    } else {
      return null;
    }
  }

  handleClick(e){
    e.preventDefault();
  }

  switch(e){
    e.preventDefault();
    this.props.closeUberModal();
  }

  render(){
    return(
      <Modal show={this.props.showUberModal} onHide={this.props.closeUberModal}>
        <Modal.Header closebutton>
          <Modal.Title>
            <p>Uber info</p>
          </Modal.Title>
          <Modal.Body>
            {this.displayUberSpinner()}
            {this.displayUberInfo()}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default UberInfo;
