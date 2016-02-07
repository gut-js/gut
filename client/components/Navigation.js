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
    this.displayLocationChoice = this.displayLocationChoice.bind(this);
    this.displayPreferences = this.displayPreferences.bind(this);
    this.displayFriends = this.displayFriends.bind(this);
    this.displayProfileHome = this.displayProfileHome.bind(this);
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
    const { clearViews } = this.props.viewActions;
    const { clearLocation } = this.props.dinerActions;
    const { clearPoll } = this.props.pollActions;

    localStorage.removeItem('token');
    clearLocation();
    clearViews();
    clearPoll();
    logoutUser();
  }

  displayLocationChoice(){
    const { displayLocationChoice } = this.props.viewActions;
    const { username } = this.props;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    displayLocationChoice();
  }

  displayPreferences(){
    const { displayMorePreferences } = this.props.viewActions;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    displayMorePreferences();
  }

  displayFriends(){
    const { displayAddFriends } = this.props.viewActions;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    displayAddFriends();
  }

  displayProfileHome(){
    const { displayProfileHome } = this.props.viewActions;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    displayProfileHome();
  }

  render(){
    let menu = this.props.isLoggedIn ? (
      <Nav pullRight>
        <NavItem
        eventKey={1}>
        Welcome {this.props.username} !
        </NavItem>
        <NavItem
          eventKey={2}
          href='#'
          onClick={this.displayLocationChoice}>
          Lets Eat
        </NavItem>
        <NavItem
          eventKey={3}
          href='#'
          onClick={this.displayPreferences}>
          Refine your Preferences
        </NavItem>
        <NavItem
          eventKey={4}
          href='#'
          onClick={this.displayFriends}>
          Friends
        </NavItem>
        <NavItem
          eventKey={5}
          href='#'
          onClick={this.logOut}>
        Log out
        </NavItem>
      </Nav>
      ) : (
      <Nav pullRight>
        <NavItem
          eventKey={1}
          href='#'
          onClick={this.openSignIn}>
          Sign In
          <SignIn
            {...this.props}
            showSignInModal={this.state.showSignInModal}
            closeSignIn={this.closeSignIn}
            openRegister={this.openRegister} />
        </NavItem>
        <NavItem
          eventKey={2}
          href='#'
          onClick={this.openRegister}>
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
            <img
              src='./../static/assets/snap_pea_pea.png'
              alt='snap_pea_logo'
              onClick={this.displayProfileHome} />
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
