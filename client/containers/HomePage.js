import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

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
    return (
      <div>
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>snapPea</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#' onClick={this.openSignIn}>
              Sign In
              <SignIn
                {...this.props}
                showSignInModal={this.state.showSignInModal}
                closeSignIn={this.closeSignIn}
                openRegister={this.openRegister} />
            </NavItem>
            <NavItem eventKey={2} href='#' onClick={this.openRegister}>
              Register
              <Register
                {...this.props}
                showRegisterModal={this.state.showRegisterModal}
                closeRegister={this.closeRegister}
                openSignIn={this.openSignIn} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
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
    showPoll: state.authReducer.showPoll,
    isSubmitting: state.pollReducer.isSubmitting,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
