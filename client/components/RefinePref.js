import React from 'react';

//Components
import Poll from './Poll';

class RefinePref extends React.Component {
  constructor(){
    super();
    this.displayPreferencePoll = this.displayPreferencePoll.bind(this);
  }

  componentWillMount(){
    const { fetchYelpData } = this.props.pollActions;

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

  render(){
    console.log('props in refine pref', this.props);
    return(
      <div>
        <h1>Refine your Preferences.</h1>
        {this.displayPreferencePoll()}
      </div>
    )
  }
}

export default RefinePref;
