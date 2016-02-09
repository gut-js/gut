import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ClearHistory extends React.Component {
  constructor(){
    super();
    this.handleClearHistory = this.handleClearHistory.bind(this);
  }

  handleClearHistory(){
    const { username } = this.props;
    const { clearHistory } = this.props.dinerActions;

    clearHistory(username);
  }

  render(){
    const { showClearModal, closeClearModal } = this.props;

    return(
      <Modal
        show={showClearModal}
        onHide={closeClearModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1>Are you sure you want to delete your preferences?</h1>
          <Button onClick={this.handleClearHistory}>
            Yes, clear my restaurant history
          </Button>
          <Button onClick={closeClearModal}>
            No, I change my mind
          </Button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ClearHistory;
