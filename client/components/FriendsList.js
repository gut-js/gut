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
    let dinersArr = [];

    if(userFriends.length > 0){
      for(var i = 1; i < diners.length; i++){
        dinersArr.push(diners[i].friendName);
      }

      return userFriends.filter(friend => {
        return dinersArr.indexOf(friend.username) === -1
      })
      .map((friend, ind) => {
        return(
          <FriendEntry
            username={username}
            removeFriend={removeFriend}
            displayFriendsChoice={displayFriendsChoice}
            addToDiners={addToDiners}
            removeFromDiners={removeFromDiners}
            photo={friend.avatarUrl}
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
