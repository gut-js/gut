import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Signin extends React.Component {
  render(){
    return(
      <Modal show={this.props.showSignInModal} onHide={this.props.closeSignIn}>
        <Modal.Header closeButton>
          <Modal.Title>
            Sign in
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Username' />
            </div>
            <div className='form-group'>
              <input type='password' className='form-control' placeholder="Password" />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-block'>Sign in</button>
              <div>
                Dont have an account? Click <a>here</a> to register.
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Signin;
