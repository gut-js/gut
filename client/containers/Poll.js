import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

//Actions
import * as pollActions from './../actions/pollActions'

//Components
import PollCategory from './../components/PollCategory';

class Poll extends React.Component {
  constructor(){
    super();
  }

  render(){
    console.log('props in poll', this.props);
    return (
      <div>
       <PollCategory
        pollActions={this.props.pollActions}
        businesses={this.props.businesses}
        username={this.props.username} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.pollReducer.selected,
    unselected: state.pollReducer.unselected,
    pollErrorMessage: state.pollReducer.pollErrorMessage,
    businesses: state.authReducer.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pollActions: bindActionCreators(pollActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
