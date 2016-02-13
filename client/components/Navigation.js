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
    this.displayHistory = this.displayHistory.bind(this);
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
    const { logoutUser, clearPoll } = this.props.authActions;
    const { clearViews } = this.props.viewActions;
    const { clearLocation } = this.props.dinerActions;

    localStorage.removeItem('token');
    clearLocation();
    clearViews();
    clearPoll();
    logoutUser();
  }

  displayHistory(){
    const { clearPoll } = this.props.authActions;
    const { displayHistory } = this.props.viewActions;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    clearPoll();
    displayHistory();
  }

  displayLocationChoice(){
    const { clearPoll } = this.props.authActions;
    const { displayLocationChoice } = this.props.viewActions;
    const { username } = this.props;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    clearPoll();
    displayLocationChoice();
  }

  displayPreferences(){
    const { clearPoll } = this.props.authActions;
    const { refreshPoll, fetchYelpData } = this.props.pollActions;
    const { displayMorePreferences } = this.props.viewActions;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    refreshPoll();
    clearPoll();
    clearDiners();
    clearLocation();
    clearFriends();
    fetchYelpData();
    displayMorePreferences();
  }

  displayFriends(){
    const { clearPoll } = this.props.authActions;
    const { displayAddFriends } = this.props.viewActions;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    clearPoll();
    displayAddFriends();
  }

  displayProfileHome(){
    const { clearPoll } = this.props.authActions;
    const { displayProfileHome } = this.props.viewActions;
    const { clearDiners, clearLocation } = this.props.dinerActions;
    const { clearFriends } = this.props.friendActions;

    clearDiners();
    clearLocation();
    clearFriends();
    clearPoll();
    displayProfileHome();
  }

  render(){
    let menu = this.props.isLoggedIn ? (
      <Nav pullRight>
        <NavItem
        eventKey={1}
        className='welcome-nav'>
        Welcome {this.props.username}!
        </NavItem>
        <NavItem
          eventKey={2}
          href='#'
          onClick={this.displayLocationChoice}>
          Let's Eat
        </NavItem>
        <NavItem
          eventKey={2}
          href='#'
          onClick={this.displayHistory}>
          History
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
        onClick={this.displayPreferences}>
        Settings
        </NavItem>
        <NavItem
          eventKey={6}
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
              src='./../static/assets/snap_pea.png'
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
