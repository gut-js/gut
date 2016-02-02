import React from 'react';

class AddFriend extends React.Component {
  constructor(){
    super();
    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(){
    const { username, friendName, addFriend } = this.props;
    const addFriendInfo = {
      username: username,
      friendname: friendName
    }

    addFriend(addFriendInfo);
  }

  render(){
    const { friendName } = this.props;

    return(
      <li className='list-group-item' ref='friendUsername'>
        {friendName}
        <button className='badge' onClick={this.addFriend}>
        <span className='glyphicon glyphicon-plus'>Add</span>
        </button>
      </li>
    )
  }
}

export default AddFriend;
