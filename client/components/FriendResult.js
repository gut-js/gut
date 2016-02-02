import React from 'react';

class FriendResult extends React.Component {
  render(){
    const { username } = this.props;
    console.log('name in results', username)
    return(
      <li className='list-group-item'>{username}</li>
    )
  }
}

export default FriendResult;
