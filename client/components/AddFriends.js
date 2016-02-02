import React from 'react';

//Components
import FriendResult from './FriendResult';

class AddFriends extends React.Component {
  constructor(){
    super();
    this.sendQuery = this.sendQuery.bind(this);
    this.displayFriends = this.displayFriends.bind(this);
  }

  sendQuery(){
    const { findFriends } = this.props.friendActions;
    const { username } = this.props;
    let searchTerm = this.refs.friendQuery.value;

    findFriends(searchTerm, username);
  }

  displayFriends(){
    const { searchResults, friendSearchQuery } = this.props;

    if(friendSearchQuery === ''){
      return null;
    } else if(searchResults.length > 0){
      return searchResults.map((friend, ind) => {
        return (<FriendResult key={ind} username={friend.username} />)
      }).slice(0, 6);
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
          {this.displayFriends()}
        </ul>
      </div>
    )
  }
}

export default AddFriends;
