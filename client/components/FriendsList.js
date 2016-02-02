import React from 'react';

class FriendsList extends React.Component {
  render(){
    console.log('props in friendslist', this.props);
    return(
      <div>
        Hello from Friends List
      </div>
    )
  }
}

export default FriendsList;
