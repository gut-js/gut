import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ProfilePic extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){ //start here
    // const { resetPoll, fetchYelpData } = this.props.pollActions;
    // const { refreshPoll } = this.props.pollActions;
    const { username } = this.props;
    const { syncAvatarUrl } = this.props.dinerActions;
    syncAvatarUrl('http://localhost:5679/static/assets/avatar/' + username);
    const { closePicModal } = this.props;
    closePicModal();
  }

  render(){
    const { showPicModal, closePicModal } = this.props;

    return(
      <Modal
        show={showPicModal}
        onHide={closePicModal}>
        <Modal.Header closeButton>
        Upload a Profile Pic
        </Modal.Header>
        <Modal.Body>
          <form action="/photo" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
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
