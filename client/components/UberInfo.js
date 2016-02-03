import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class UberInfo extends React.Component {
  constructor(){
    super();

  }

  handleClick(e){
    e.preventDefault();
    const { getUber } = this.props.dinerActions;

    getUber()
  }

  switch(e){
    e.preventDefault();
    this.props.closeUberModal();
  }

  render(){
    let uberInfoBox = this.props.isFetchingUberData ? (
      <div>
        <image src='./../static/assets/spinner.gif' />
      </div>
      ) : (
      <div>
        <h1>display info</h1>
      </div>
    );

    return(
      <Modal show={this.props.showUberModal} onHide={this.props.closeUberModal}>
        <Modal.Header closebutton>
          <Modal.Title>
            Uber info
          </Modal.Title>
          <Modal.Body>
            {uberInfoBox}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default UberInfo;