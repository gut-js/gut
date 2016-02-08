import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import isValid from './../utils/validationHelperFunctions';

class Register extends React.Component {
  constructor(){
    super();
    this.setFirst = this.setFirst.bind(this);
    this.setLast = this.setLast.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.displayAlphaErrFirst = this.displayAlphaErrFirst.bind(this);
    this.displayAlphaErrLast = this.displayAlphaErrLast.bind(this);
    this.displayEmailErr = this.displayEmailErr.bind(this);
    this.displayUsernameErr = this.displayUsernameErr.bind(this);
    this.isFormError = this.isFormError.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.switch = this.switch.bind(this);
    this.state = {
      first: '',
      last: '',
      username: '',
      email: '',
      runStatus: ''
    }
  }

  setFirst(e){
    this.setState({
      first: e.target.value
    })
  }

  setLast(e){
    this.setState({
      last: e.target.value
    })
  }

  setUser(e){
    this.setState({
      username: e.target.value
    })
  }

  setEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  displayAlphaErrFirst(){
    return isValid.isAlpha(this.state.first) ? null : <span>input must be a-z characters</span>
  }

  displayAlphaErrLast(){
    return isValid.isAlpha(this.state.last) ? null : <span>input must be a-z characters</span>
  }

  displayEmailErr(){
    return isValid.isEmail(this.state.email) ? null :
    <span>please enter a valid email address</span>
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

  isFormError(){
    if(this.state.first.length === 0 || this.state.last.length === 0 || this.state.username.length === 0 || this.state.email.length === 0){
      this.setState({runStatus: 'Required fields cannot be left empty'});
      return true;
    }

    if(this.displayAlphaErrFirst() || this.displayAlphaErrLast() || this.displayEmailErr()){
      this.setState({runStatus: 'Please fix all form errors before submitting'});
      return true;
    }

    return false;
  }

  handleClick(e){
    e.preventDefault();

    if(!this.isFormError()){
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
  }

  switch(e){
    e.preventDefault();
    this.props.closeRegister();
    this.props.openSignIn();
  }

  render(){
    console.log('props in register', this.props);
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
              ref='firstname'
              onChange={this.setFirst} />
          </div>
          {this.displayAlphaErrFirst()}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Last Name'
              ref='lastname'
              onChange={this.setLast} />
          </div>
          {this.displayAlphaErrLast()}
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
              ref='username'
              onChange={this.setUser} />
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
              ref='email'
              onChange={this.setEmail} />
          </div>
          {this.state.runStatus}
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
