import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

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
  }

  displayUberSpinner(){
    if(this.props.isLoadingUberData){
      return (
        <div>
          <h3>Retrieving real-time fare estimates from Uber...</h3>
          <image src='./../static/assets/spinner.gif' />
        </div>
      )
    } else {
      return null;
    }
  }

  displayUberInfo(){
    if(this.props.uberData.prices){

      let fares = this.props.uberData.prices.map(function(price) {
        return (
          <Fare
            price={price}
            key={price.product_id}/>
        )
      })

      let uberUrl = 'https://m.uber.com/sign-up?client_id=EKD_tcp67WQOa3TsUj0ZmTnjohbVQW5n';

      return (
        <div>
          {fares}
          <div>
            <a href={uberUrl}>
              <Button><img src='./../static/assets/UBER_API_Badges_1x_22px.png' />    Ride there with Uber</Button>
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
