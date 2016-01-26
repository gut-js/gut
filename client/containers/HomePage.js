import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as authActions from './../actions/authActions';

//Components
import SignIn from './../components/SignIn';
import Register from './../components/Register';

class HomePage extends React.Component {
  constructor(){
    super();
    this.openSignIn = this.openSignIn.bind(this);
    this.closeSignIn = this.closeSignIn.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.closeRegister = this.closeRegister.bind(this);
    this.state = {
      showSignInModal: false,
      showRegisterModal: false,
    }
  }

  openSignIn(){
    this.setState({
      showSignInModal: true
    })
  }

  closeSignIn(){
    this.setState({
      showSignInModal: false
    })
  }

  openRegister(){
    this.setState({
      showRegisterModal: true
    })
  }

  closeRegister(){
    this.setState({
      showRegisterModal: false
    })
  }

  render(){
    return (
      <div className='row'>
        <button
          type='button'
          className='btn col-md-7 center-block'
          onClick={this.openSignIn}>SIGN IN
        </button>
        <SignIn
          {...this.props}
          showSignInModal={this.state.showSignInModal}
          closeSignIn={this.closeSignIn} />
        <button
          type='button'
          className='btn col-md-7 center-block'
          onClick={this.openRegister}>REGISTER
        </button>
        <Register
          {...this.props}
          showRegisterModal={this.state.showRegisterModal}
          closeRegister={this.closeRegister} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    username: state.authReducer.username,
    isLoggedIn: state.authReducer.isLoggedIn,
    isFetching: state.authReducer.isFetching,
    errorMessage: state.authReducer.errorMessage
  }
}

function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
