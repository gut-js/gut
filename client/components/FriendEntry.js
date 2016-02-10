import React from 'react';

class FriendEntry extends React.Component {
  constructor(){
    super();
    this.displayButton = this.displayButton.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.selectDiner = this.selectDiner.bind(this);
  }

  displayButton(){
    if(this.props.displayFriendsChoice){
      return(
        <button
          onClick={this.selectDiner}>
          Dine with
        </button>
      )
    } else {
      return(
        <button
          onClick={this.removeFriend}>
          Remove
        </button>
      )
    }
  }

  removeFriend(){
    const { username, friendName, removeFriend } = this.props;
    const removeFriendInfo = {
      username: username,
      friendname: friendName
    }

    removeFriend(removeFriendInfo);
  }

  selectDiner(){
    const { friendName, photo, addToDiners } = this.props;
    const friendInfo = {
      friendName: friendName,
      photo: photo
    }

    addToDiners(friendInfo);
  }

  render(){
    return(
      <li className='list-group-item friend-entry'>
        {this.displayButton()}
        <h3>{this.props.friendName}</h3>
        <img src={this.props.photo} />
      </li>
    )
  }
}

export default FriendEntry;
