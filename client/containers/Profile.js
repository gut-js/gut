import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as authActions from './../actions/authActions';
import * as searchActions from './../actions/searchActions';
import * as dinerActions from './../actions/dinerActions';
import * as pollActions from './../actions/pollActions';
import * as viewActions from './../actions/viewActions';
import * as friendActions from './../actions/friendActions';

//Components
import Navigation from './../components/Navigation';
import ProfileHome from './../components/ProfileHome';
import Poll from './../components/Poll';

class Profile extends React.Component {
  constructor(){
    super();
    this.displayProfile = this.displayProfile.bind(this);
  }

  componentWillMount(){
    const { authenticateUser } = this.props.authActions;

    authenticateUser(localStorage.token);
  }

  displayProfile(){
    if(this.props.showPoll && this.props.isSubmitting){
      return(
        <Poll {...this.props} />
      )
    } else {
      return (
        <ProfileHome {...this.props} />
      )
    }
  }

  render(){
    return(
      <div>
        <Navigation {...this.props} />
        <div>
          {this.displayProfile()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //auth state
    username: state.authReducer.username,
    isLoggedIn: state.authReducer.isLoggedIn,
    isFetching: state.authReducer.isFetching,
    authErrorMsg: state.authReducer.authErrorMsg,
    showPoll: state.authReducer.showPoll,
    //search state
    restaurants: state.searchReducer.businesses,
    searchErrorMsg: state.searchReducer.searchErrorMsg,
    //poll state
    isSubmitting: state.pollReducer.isSubmitting,
    selected: state.pollReducer.selected,
    unselected: state.pollReducer.unselected,
    pollErrorMessage: state.pollReducer.pollErrorMessage,
    data: state.pollReducer.data,
    //diner state
    diners: state.dinerReducer.diners,
    location: state.dinerReducer.location,
    recommendations: state.dinerReducer.recommendations,
    topRestaurant: state.dinerReducer.topRestaurant,
    index: state.dinerReducer.index,
    isLoadingResults: state.dinerReducer.isLoadingResults,
    uberData: state.dinerReducer.uberData,
    isLoadingUberData: state.dinerReducer.isLoadingUberData,
    //view state
    displayFriendsChoice: state.viewReducer.displayFriendsChoice,
    displayLocationChoice: state.viewReducer.displayLocationChoice,
    displayResults: state.viewReducer.displayResults,
    displayAddFriends: state.viewReducer.displayAddFriends,
    //friend state
    userFriends: state.friendReducer.userFriends,
    friendSearchQuery: state.friendReducer.friendSearchQuery,
    searchResults: state.friendReducer.searchResults,
    friendsErrorMsg: state.friendReducer.friendsErrorMsg,
    isSearching: state.friendReducer.isSearching,
    addCheck: state.friendReducer.addCheck,
    removeCheck: state.friendReducer.removeCheck,
    isLoadingFriends: state.friendReducer.isLoadingFriends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch),
    dinerActions: bindActionCreators(dinerActions, dispatch),
    pollActions: bindActionCreators(pollActions, dispatch),
    viewActions: bindActionCreators(viewActions, dispatch),
    friendActions: bindActionCreators(friendActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
