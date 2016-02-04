import React from 'react';

//Components
import AddFriend from './AddFriend';
import FriendsList from './FriendsList';

class Friends extends React.Component {
  constructor(){
    super();
    this.sendQuery = this.sendQuery.bind(this);
    this.displaySearchResults = this.displaySearchResults.bind(this);
  }

  componentWillMount(){
    const { username } = this.props;
    const { loadFriends } = this.props.friendActions;

    loadFriends(username);
  }

  sendQuery(){
    const { findFriends } = this.props.friendActions;
    const { username } = this.props;
    let searchTerm = this.refs.friendQuery.value;

    findFriends(searchTerm, username);
  }

  displaySearchResults(){
    const { searchResults, friendSearchQuery, username, userFriends } = this.props;
    const { addFriend } = this.props.friendActions;
    const friendNameArr = userFriends.map(user => {
      return user.username;
    });

    if(friendSearchQuery === ''){
      return null;
    } else if(searchResults.length > 0){
      return searchResults.filter(query => {
        return friendNameArr.indexOf(query.username) === -1
      })
      .map((friend, ind) => {
        return(
          <AddFriend
            username={username}
            friendName={friend.username}
            addFriend={addFriend}
            key={ind} />
        )
      })
      .slice(0,6);
    } else {
      return(
        <div>
          Sorry, no peas in this pod.
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <h1>Add Friends</h1>
        <div className='input-group'>
          <span className='input-group-addon'>@</span>
          <input
            className='form-control'
            type='text'
            placeholder='Enter a username'
            ref='friendQuery'
            onChange={this.sendQuery} />
        </div>
        <ul className='list-group'>
          {this.displaySearchResults()}
        </ul>
        <div>
          <FriendsList {...this.props} />
        </div>
      </div>
    )
  }
}

export default Friends;

// todo:
// show current friends somewhere
// remove button for friends
