import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

// Components
import SignIn from './SignIn';
import Register from './Register';

class Navigation extends React.Component {
  constructor(){
    super();
    this.openSignIn = this.openSignIn.bind(this);
    this.closeSignIn = this.closeSignIn.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.closeRegister = this.closeRegister.bind(this);
    this.logOut = this.logOut.bind(this);
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

  logOut(){
    const { logoutUser } = this.props.authActions;
    localStorage.removeItem('token');
    logoutUser();
  }

  render(){
    let menu = this.props.isLoggedIn ? (
      <Nav pullRight>
        <NavItem eventKey={1} href='#' onClick={this.logOut}>
          Log out
        </NavItem>
      </Nav>
      ) : (
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
    );

    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>snapPea</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {menu}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
