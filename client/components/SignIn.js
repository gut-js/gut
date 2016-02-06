import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { routeActions } from 'react-router-redux';

class SignIn extends React.Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.switch = this.switch.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const { signinUser } = this.props.authActions;
    const username = this.refs.username;
    const password = this.refs.password;
    const userInfo = {
      username: username.value,
      password: password.value
    };

    signinUser(userInfo)

    username.value = '';
    password.value = '';
  }

  switch(){
    this.props.closeSignIn();
    this.props.openRegister();
  }

  displayError(){
    if(this.props.authErrorMsg){
      return(
        <p>
          Either the username or password you entered is incorrect.
        </p>
      )
    } else {
      return null;
    }
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
            <a href='https://accounts.google.com/o/oauth2/auth?response_type=code&scope=openid%20profile%20email&client_id=1007941048671-mqral0q9jeg17ervhv01gknh7tml237i.apps.googleusercontent.com&redirect_uri=http://127.0.0.1:5679/oauthcallback&connection=google-oauth2'>Sign in with Google</a>
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
              {this.displayError()}
              <button
                type='submit'
                className='btn btn-block'
                onClick={this.handleClick}>
                Sign in
              </button>
            </div>
            <div>
              {"Don't"} have an account? Click <a href="#" onClick={this.switch}>here</a> to register.
            </div>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SignIn;
