import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class DeletePref extends React.Component {
  constructor(){
    super();
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(){
    const { resetPoll, fetchYelpData } = this.props.pollActions;
    const { clearPoll } = this.props.pollActions;
    const { username, closeDeleteModal } = this.props;
    const userInfo = {
      username: username
    }

    resetPoll(userInfo);
    clearPoll();
    fetchYelpData();
    closeDeleteModal();
  }

  render(){
    const { showDeleteModal, closeDeleteModal } = this.props;

    return(
      <Modal
        show={showDeleteModal}
        onHide={closeDeleteModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1>Are you sure you want to delete your preferences?</h1>
          <Button onClick={this.handleReset}>Yes, delete my preferences</Button>
          <Button onClick={closeDeleteModal}>No, I change my mind</Button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default DeletePref;
