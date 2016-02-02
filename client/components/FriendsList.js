import React from 'react';

//Components
import Friend from './Friend';

class FriendsList extends React.Component {
  constructor(){
    super();
    this.displayFriends = this.displayFriends.bind(this);
  }

  displayFriends(){
    const { userFriends, username } = this.props;
    const { removeFriend } = this.props.friendActions;

    if(userFriends.length > 0){
      return userFriends.map((friend, ind) => {
        return (
          <Friend
            username={username}
            friendName={friend.username}
            categories={friend.categories}
            removeFriend={removeFriend}
            key={ind} />
        )
      })
    } else {
      return(
        <div>
          Please add friends!
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <h2>Your Friends</h2>
        <ul className='list-group'>
          {this.displayFriends()}
        </ul>
      </div>
    )
  }
}

export default FriendsList;
