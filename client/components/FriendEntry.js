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
          className='badge'
          onClick={this.selectDiner}>
          <span className='glyphicon glyphicon-plus'>
          Dine with
          </span>
        </button>
      )
    } else {
      return(
        <button
          className='badge'
          onClick={this.removeFriend}>
          <span className='glyphicon glyphicon-minus'>
          Remove
          </span>
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
    const { friendName, addToDiners } = this.props;

    addToDiners(friendName);
  }

  render(){
    return(
      <li className='list-group-item'>
        {this.displayButton()}
        <span className='badge'>
          {Object.keys(this.props.categories).length} Categories
        </span>
        <p>{this.props.friendName}</p>
        <img src={this.props.photo} />
      </li>
    )
  }
}

export default FriendEntry;
