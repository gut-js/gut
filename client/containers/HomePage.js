import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

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
      showRegisterModal: false
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
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

    console.log('this.props in homepage', this.props);

    return (
      <div className='well' style={wellStyles}>
        <Button
          bsStyle='primary'
          bsSize='large'
          type='button'
          block
          onClick={this.openSignIn}>SIGN IN
        </Button>
        <SignIn
          {...this.props}
          showSignInModal={this.state.showSignInModal}
          closeSignIn={this.closeSignIn} />
        <Button
          bsStyle='primary'
          bsSize='large'
          type='button'
          block
          onClick={this.openRegister}>REGISTER
        </Button>
        <Register
          {...this.props}
          showRegisterModal={this.state.showRegisterModal}
          closeRegister={this.closeRegister} />
          <div className='col-md-12 center-block'>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.authReducer.username,
    isLoggedIn: state.authReducer.isLoggedIn,
    isFetching: state.authReducer.isFetching,
    authErrorMsg: state.authReducer.authErrorMsg,
    showPoll: state.authReducer.showPoll
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
