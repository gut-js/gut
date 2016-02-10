import React from 'react';

//Components
import PollCategory from './../components/PollCategory';

class Poll extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <h1>Select <span className='cursive'>one</span></h1>
        <PollCategory
          pollActions={this.props.pollActions}
          data={this.props.data}
          username={this.props.username} />
      </div>
    )
  }
}

export default Poll;
