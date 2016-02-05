import React from 'react';

//Components
import Poll from './Poll';

class RefinePref extends React.Component {
  constructor(){
    super();
    this.displayPreferencePoll = this.displayPreferencePoll.bind(this);
    this.displayResetCheck = this.displayResetCheck.bind(this);
    this.handleResetRequest = this.handleResetRequest.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount(){
    const { fetchYelpData } = this.props.pollActions;

    fetchYelpData();
  }

  handleResetRequest(){
    const { resetRequest } = this.props.pollActions;

    resetRequest();
  }

  handleReset(){
    const { resetPoll, fetchYelpData } = this.props.pollActions;
    const { username } = this.props;
    const userInfo = {
      username: username
    }

    resetPoll(userInfo);
    fetchYelpData();
  }

  displayPreferencePoll(){
    if(this.props.isSubmitting){
      return(
        <Poll {...this.props} />
      )
    } else {
      return(
        <div>
        Save some food for tomorrow!
        </div>
      )
    }
  }

  displayResetCheck(){

    if(this.props.resetCheck){
      return(
        <button onClick={this.handleResetRequest}>
          Delete My Preferences
        </button>
      )
    } else {
      return(
        <div>
          Are you sure?
          <button onClick={this.handleReset}>
            Yes, I am sure. Delete my preferences.
          </button>
        </div>
      )
    }
  }

  render(){
    console.log('props in refine pref', this.props);
    return(
      <div>
        <h1>Refine your Preferences.</h1>
        {this.displayPreferencePoll()}
        <h3>Reset your Preferences</h3>
        {this.displayResetCheck()}
      </div>
    )
  }
}

export default RefinePref;
