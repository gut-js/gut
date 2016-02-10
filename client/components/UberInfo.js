import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';

class Fare extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.price.display_name} - {this.props.price.estimate}</p>
      </div>
    )
  }
}

class UberInfo extends React.Component {
  constructor(){
    super();
    this.displayUberSpinner = this.displayUberSpinner.bind(this);
    this.displayUberInfo = this.displayUberInfo.bind(this);
    this.state = {
      isFetchingUberData: false
    }
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

  displayUberSpinner(){
    if(this.props.isLoadingUberData){
      return (
        <div className='uberSpinner text-center'>
          <h3 className='uberSpinner'>Getting Uber fare estimates...</h3>
          <image src='./../static/assets/darkspinner.gif' />
        </div>
      )
    } else {
      return null;
    }
  }

  displayUberInfo(){
    if(this.props.uberData.prices){

      let list = []

      for (var i = 0; i < this.props.uberData.prices.length; i++) {
        if (this.props.uberData.prices[i].display_name === 'uberX' ||
            this.props.uberData.prices[i].display_name === 'UberSELECT' ||
            this.props.uberData.prices[i].display_name === 'UberBLACK' ||
            this.props.uberData.prices[i].display_name === 'UberLUX') {
          list.push(this.props.uberData.prices[i])
        }
      }

      let fares = list.map(function(price) {
        return (
          <Fare
            price={price}
            key={price.product_id}/>
        )
      })

      let uberUrl = 'https://m.uber.com/sign-up?client_id=EKD_tcp67WQOa3TsUj0ZmTnjohbVQW5n&pickup_latitude=' + this.props.pickupLocation[0] + '&pickup_longitude=' + this.props.pickupLocation[1];

      let date = moment(Date.now()).fromNow()

      return (
        <div>
          <h3 className='text-center'>Fare Estimates</h3>
          <p className='text-center'>Last updated {date}</p>
          {fares}
          <div className='text-center'>
            <a href={uberUrl} target='_blank'>
              <Button><img src='./../static/assets/UBER_API_Badges_1x_22px.png' />Request a Ride</Button>
            </a>
          </div>
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
      <Modal
        show={this.props.showUberModal}
        onHide={this.props.closeUberModal}
        className='loginmodal register'>
        <Modal.Header closebutton className='close-btn'>
          <Modal.Body className='modalbody saved-message'>
            {this.displayUberSpinner()}
            {this.displayUberInfo()}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default UberInfo;
