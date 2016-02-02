import React from 'react';

//Components
import Friend from './Friend';

class FriendsList extends React.Component {
  constructor(){
    super();
    this.displayFriends = this.displayFriends.bind(this);
  }

  displayFriends(){
    const { userFriends } = this.props;

    if(userFriends.length > 0){
      return userFriends.map((friend, ind) => {
        return (
          <Friend
          username={friend.username}
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
