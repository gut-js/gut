import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Signin extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const username = this.refs.username;
    const password = this.refs.password;
    const userInfo = {
      username: username.value,
      password: password.value
    };
    console.log('SIGN IN', userInfo);
    username.value = '';
    password.value = '';
  }

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
              <input
                type='text'
                className='form-control'
                placeholder='Username'
                ref='username' />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder="Password"
                ref='password' />
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-block'
                onClick={this.handleClick}>
                Sign in
              </button>
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
