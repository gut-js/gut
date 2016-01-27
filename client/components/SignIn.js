import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { routeActions } from 'react-router-redux';

class SignIn extends React.Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
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
      .then(()=>{
        //user has signed in, navigate them to profile
        console.log('CHANGING ROUTE!');
        routeActions.push('/profile');
      })

    username.value = '';
    password.value = '';
  }

  render(){
    let errorMsg = this.props.authErrorMsg ? (
      <p>
        Either the username or password you entered is incorrect.
      </p>) : null;

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
              {errorMsg}
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

export default SignIn;
