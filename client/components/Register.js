import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Register extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.switch = this.switch.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const { registerUser } = this.props.authActions;
    const username = this.refs.username;
    const password = this.refs.password;
    const email = this.refs.email;
    const userInfo = {
      username: username.value,
      password: password.value,
      email: email.value
    };

    registerUser(userInfo);

    username.value = '';
    password.value = '';
    email.value = '';
  }

  switch(e){
    e.preventDefault();
    this.props.closeRegister();
    this.props.openSignIn();
  }

  render(){
    let errorMsg = this.props.authErrorMsg.message ? (
      <p>
        Sorry, this username has been taken. Please try another one.
      </p>) : null;

    let infoBox = this.props.isFetching ? (
      <div>
        <image src='./../static/assets/spinner.gif' />
      </div> ) : (
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
              ref='username' />
          </div>
          {errorMsg}
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              ref='password' />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              ref='email' />
          </div>
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-block'
              onClick={this.handleClick}>Register
            </button>
          </div>
          <div>
            Already have an account? Click <a href="#" onClick={this.switch}>here</a> to sign in.
          </div>
        </form>
      );

    return(
      <Modal show={this.props.showRegisterModal} onHide={this.props.closeRegister}>
        <Modal.Header closeButton>
          <Modal.Title>
            Register
          </Modal.Title>
          <Modal.Body>
            {infoBox}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default Register;
