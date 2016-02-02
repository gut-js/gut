import React from 'react';

class FriendResult extends React.Component {
  render(){
    const { username } = this.props;

    return(
      <li className='list-group-item'>{username}</li>
    )
  }
}

export default FriendResult;
