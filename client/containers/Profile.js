import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as authActions from './../actions/authActions';
import * as searchActions from './../actions/searchActions';
import * as dinerActions from './../actions/dinerActions';
import * as pollActions from './../actions/pollActions';

//Components
import Navigation from './../components/Navigation';
import ProfileMenu from './../components/ProfileMenu';
import Poll from './../components/Poll';

class Profile extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    const { authenticateUser } = this.props.authActions;

    authenticateUser(localStorage.token);
  }

  render(){
    const { username } = this.props;

    let displayProfile = this.props.showPoll && this.props.isSubmitting ? (
        <Poll {...this.props} />
      ) : (
        <div>
          <ProfileMenu {...this.props} />
        </div>
      );

    return(
      <div>
        <Navigation {...this.props} />
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
    authErrorMsg: state.authReducer.authErrorMsg,
    showPoll: state.authReducer.showPoll,
    restaurants: state.searchReducer.businesses,
    searchErrorMsg: state.searchReducer.searchErrorMsg,
    isSubmitting: state.pollReducer.isSubmitting,
    selected: state.pollReducer.selected,
    unselected: state.pollReducer.unselected,
    pollErrorMessage: state.pollReducer.pollErrorMessage,
    data: state.pollReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch),
    dinerActions: bindActionCreators(dinerActions, dispatch),
    pollActions: bindActionCreators(pollActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
