import React from 'react';

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
        data={this.props.data}
        username={this.props.username} />
      </div>
    )
  }
}

export default Poll;
