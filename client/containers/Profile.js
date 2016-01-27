import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as authActions from './../actions/authActions';

// Containers
import RestaurantList from './RestaurantList';

class Profile extends React.Component {
  render(){
    console.log(this.props);
    return(
      <div>
        THIS IS YOUR PROFILE!
        <RestaurantList
        {...this.props}/>
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
    showPoll: state.authReducer.showPoll
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
