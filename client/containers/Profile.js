import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//Actions
import * as authActions from './../actions/authActions';
import * as searchActions from './../actions/searchActions';

//Components
import RestaurantList from './../components/RestaurantList';

//Containers
import Poll from './../containers/Poll';

class Profile extends React.Component {

  logOut(){
    console.log('logout!', localStorage.token);
    localStorage.removeItem('token');
  }

  render(){
    console.log(this.props);
    return(
      <div>
        THIS IS YOUR PROFILE!
        <Poll />
        <RestaurantList
        {...this.props}/>
        <button className="btn btn-default" onClick={this.logOut}>Log out</button>
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
