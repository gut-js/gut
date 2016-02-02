import React from 'react';

class Friend extends React.Component {
  constructor(){
    super();
    this.removeFriend = this.removeFriend.bind(this);
  }

  removeFriend(){
    const { username, friendName, removeFriend } = this.props;
    const removeFriendInfo = {
      username: username,
      friendname: friendName
    }

    removeFriend(removeFriendInfo);
  }

  render(){
    return(
      <li className='list-group-item'>
        <button className='badge' onClick={this.removeFriend}>
          <span className='glyphicon glyphicon-minus'>
          Remove
          </span>
        </button>
        <span className='badge'>
          {Object.keys(this.props.categories).length} Categories
        </span>
        <p>{this.props.friendName}</p>
      </li>
    )
  }
}

export default Friend;
