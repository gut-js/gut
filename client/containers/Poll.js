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

  componentWillMount(){
    const {fetchYelpData} = this.props.pollActions;
    fetchYelpData();
  }

  render(){
    console.log('props on poll', this.props);
    return (
      <div>
       <PollCategory pollActions={this.props.pollActions} data={this.props.data} username={this.props.username} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.pollReducer.selected,
    unselected: state.pollReducer.unselected,
    username: state.authReducer.username,
    isSubmitting: state.pollReducer.isSubmitting,
    pollErrorMessage: state.pollReducer.pollErrorMessage,
    data: state.pollReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pollActions: bindActionCreators(pollActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
