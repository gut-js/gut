import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

//Actions
import * as authActions from './../actions/authActions';
import * as searchActions from './../actions/searchActions';

//Components
import RestaurantList from './../components/RestaurantList';
import Menu from './../components/Menu';

//Containers
import Poll from './../containers/Poll';

class Profile extends React.Component {
  constructor(){
    super();
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount(){
    console.log('props in profile', this.props);
  }

  logOut(){
    const { logoutUser } = this.props.authActions;

    localStorage.removeItem('token');
    logoutUser();
  }

  render(){
    const { username } = this.props.username;

    let displayProfile = this.props.showPoll && this.props.isSubmitting ? (
      <Poll
        username={this.props.username}
        isSubmitting={this.props.isSubmitting} /> ) : (
      <div>
        <h1>PROFILE</h1>
        <Menu />
        <RestaurantList {...this.props} />
      </div> );

    let nav = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/profile'>snapPea</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#' onClick={this.logOut}>
              Log out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    return(
      <div>
        {nav}
        <div>
          {displayProfile}
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
    errorMessage: state.authReducer.errorMessage,
    showPoll: state.authReducer.showPoll,
    restaurants: state.searchReducer.businesses,
    searchErrorMsg: state.searchReducer.searchErrorMsg,
    isSubmitting: state.pollReducer.isSubmitting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
