import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as isValid from './../utils/validationHelperFunctions';

class Register extends React.Component {
  constructor(){
    super();
    this.displayUsernameErr = this.displayUsernameErr.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.switch = this.switch.bind(this);
  }

  displayUsernameErr(){
    if(this.props.authErrorMsg.message){
      return(
        <p>
          Sorry, this username has been taken. Please try another one.
        </p>
      )
    } else {
      return null;
    }
  }

  handleClick(e){
    e.preventDefault();
    const { registerUser } = this.props.authActions;
    const firstname = this.refs.firstname;
    const lastname = this.refs.lastname;
    const username = this.refs.username;
    const password = this.refs.password;
    const email = this.refs.email;
    const userInfo = {
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
      password: password.value,
      email: email.value
    };

    registerUser(userInfo);

    firstname.value = '';
    lastname.value = '';
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
    let infoBox = this.props.isFetching ? (
      <div>
        <image src='./../static/assets/spinner.gif' />
      </div> ) : (
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='First Name'
              ref='firstname' />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Last Name'
              ref='lastname' />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
              ref='username' />
          </div>
          {this.displayUsernameErr()}
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
        </Modal.Header>
        <Modal.Body>
          {infoBox}
        </Modal.Body>
      </Modal>
    )
  }
}

export default Register;
