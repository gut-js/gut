import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as HelloActions from './../actions/actions';

//Components
import Login from './../components/Login';
import Signup from './../components/Signup';

class HomePage extends React.Component {
  constructor(){
    super();
    this.openLogin = this.openLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.openSignup = this.openSignup.bind(this);
    this.closeSignup = this.closeSignup.bind(this);
    this.state = {
      showLoginModal: false,
      showSignupModal: false,
    }
  }

  openLogin(){
    this.setState({
      showLoginModal: true
    })
  }

  closeLogin(){
    this.setState({
      showLoginModal: false
    })
  }

  openSignup(){
    this.setState({
      showSignupModal: true
    })
  }

  closeSignup(){
    this.setState({
      showSignupModal: false
    })
  }

  render(){
    return (
      <div className='row'>
        <button
          type='button'
          className='btn col-md-7 center-block'
          onClick={this.openLogin}>Click here to log in
        </button>
        <Login
          {...this.props}
          showLoginModal={this.state.showLoginModal}
          closeLogin={this.closeLogin} />
        <button
          type='button'
          className='btn col-md-7 center-block'
          onClick={this.openSignup}>Click here to sign up
        </button>
        <Signup
          {...this.props}
          showSignupModal={this.state.showSignupModal}
          closeSignup={this.closeSignup} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    text: state.sayHello.text,
    meep: state.sayHello.hello
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(HelloActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
