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
    syncAvatarUrl('http://54.200.133.56:8080/static/assets/avatar/' + username);
    const { closePicModal } = this.props;
    closePicModal();
  }

  render(){
    const { showPicModal, closePicModal } = this.props;

    let avatar = this.props.avatarUrl ? (<img src={this.props.avatarUrl} />) : (null)
    return(
      <Modal
        show={showPicModal}
        onHide={closePicModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <h6 className='cursive'>Upload a Profile Pic</h6>
            <form action="/photo" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
              {avatar}
              <input type="file" name='image'/>
              <input type="hidden" name="username" value= { this.props.username } />
              <div>
                <input type="submit" value="Upload"/>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ProfilePic;
