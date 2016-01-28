import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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

  logOut(){
    const { logoutUser } = this.props.authActions;

    localStorage.removeItem('token');
    logoutUser();
  }

  render(){
    const { username } = this.props.username;
    let displayProfile;

    displayProfile = this.props.showPoll ? (
      <Poll /> ) : (
      <div>
        <RestaurantList {...this.props} />
        <Menu />
      </div> );

    return(
      <div>
        <h1>Welcome {username} !</h1>
        <div>
          <button
            className="btn btn-default"
            onClick={this.logOut}>Log out
          </button>
        </div>
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
    searchErrorMsg: state.searchReducer.searchErrorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
