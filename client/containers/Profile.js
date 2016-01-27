import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as authActions from './../actions/authActions';

// Containers
import RestaurantList from './RestaurantList';

class Profile extends React.Component {
  render(){
    return(
      <div>
        THIS IS YOUR PROFILE!
        <RestaurantList
        {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    username: state.authReducer.username,
    isLoggedIn: state.authReducer.isLoggedIn,
    isFetching: state.authReducer.isFetching,
    errorMessage: state.authReducer.errorMessage,
  }
}

function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
