import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Register extends React.Component {
  render(){
    return(
      <Modal show={this.props.showRegisterModal} onHide={this.props.closeRegister}>
        <Modal.Header closeButton>
          <Modal.Title>
            Register
          </Modal.Title>
          <Modal.Body>
            <form>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Username' />
              </div>
              <div className='form-group'>
                <input type='password' className='form-control' placeholder='Password' />
              </div>
              <div className='form-group'>
                <input type='email' className='form-control' placeholder='Email' />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>Log in</button>
                <div>
                  Have an account? Click <a>here</a> to log in.
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default Register;
