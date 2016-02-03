import React from 'react';

//Components
import FriendEntry from './FriendEntry';

class FriendsList extends React.Component {
  constructor(){
    super();
    this.displayFriends = this.displayFriends.bind(this);
  }

  displayFriends(){
    const { userFriends, username, displayFriendsChoice } = this.props;
    const { removeFriend } = this.props.friendActions;
    const { addToDiners } = this.props.dinerActions;

    if(userFriends.length > 0){
      return userFriends.map((friend, ind) => {
        return (
          <FriendEntry
            username={username}
            removeFriend={removeFriend}
            displayFriendsChoice={displayFriendsChoice}
            addToDiners={addToDiners}
            friendName={friend.username}
            categories={friend.categories}
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
    console.log('props in list', this.props);
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
