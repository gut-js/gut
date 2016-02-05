import React from 'react';

//Components
import FriendEntry from './FriendEntry';

class FriendsList extends React.Component {
  constructor(){
    super();
    this.displayFriends = this.displayFriends.bind(this);
  }

  displayFriends(){
    const { userFriends, username, displayFriendsChoice, diners } = this.props;
    const { removeFriend } = this.props.friendActions;
    const { addToDiners, removeFromDiners } = this.props.dinerActions;

    if(userFriends.length > 0){
      return userFriends.filter(friend => {
        return diners.indexOf(friend.username) === -1
      })
      .map((friend, ind) => {
        return(
          <FriendEntry
            username={username}
            removeFriend={removeFriend}
            displayFriendsChoice={displayFriendsChoice}
            addToDiners={addToDiners}
            removeFromDiners={removeFromDiners}
            friendName={friend.username}
            categories={friend.categories}
            key={ind} />
        )
      });
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
