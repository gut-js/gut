import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ProfilePic extends React.Component {
  constructor(){
    super();
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(){
    // const { resetPoll, fetchYelpData } = this.props.pollActions;
    // const { clearPoll } = this.props.pollActions;
    // const { username, closeDeleteModal } = this.props;
    // const userInfo = {
    //   username: username
    // }

    // resetPoll(userInfo);
    // clearPoll();
    // fetchYelpData();
    // closeDeleteModal();
  }

  render(){
    const { showPicModal, closePicModal } = this.props;
    console.log('props in ProfilePic', this.props);
    console.log('username: ', this.props.username);

    return(
      <Modal
        show={showPicModal}
        onHide={closePicModal}>
        <Modal.Header closeButton>
        Upload a Profile Pic
        </Modal.Header>
        <Modal.Body>
          <form action="/photo" method="POST" encType="multipart/form-data" >
            Select an image to upload:<br></br>
            <input type="file" name='image'/>
            <input type="hidden" name="username" value= { this.props.username } /> 
            <input type="submit" value="Upload Image"/>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ProfilePic;

