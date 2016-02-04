import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gravatar from 'react-gravatar';

//Actions
import * as authActions from './../actions/authActions';

//Components
import Navigation from './../components/Navigation';

class HomePage extends React.Component {
  render(){
    return (
      <div>
        <Navigation {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.authReducer.isFetching,
    authErrorMsg: state.authReducer.authErrorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
