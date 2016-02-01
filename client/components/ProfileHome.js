import React from 'react';

//Components
import ProfileMenu from './ProfileMenu';
import DinersPage from './DinersPage';
import AddFriends from './AddFriends';

class ProfileHome extends React.Component {
  constructor(){
    super();
    this.displayFriendsChoice = this.displayFriendsChoice.bind(this);
    this.displayLocationChoice = this.displayLocationChoice.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.displayAddFriends = this.displayAddFriends.bind(this);
  }

  displayFriendsChoice(){
    if(this.props.displayFriendsChoice){
      return(
        <DinersPage {...this.props} />
      )
    } else {
      return null;
    }
  }

  displayLocationChoice(){

  }

  displayResults(){

  }

  displayAddFriends(){
    if(this.props.displayAddFriends){
      return(
        <AddFriends {...this.props} />
      )
    } else {
      return null;
    }
  }

  render(){
    return(
      <div>
        <ProfileMenu {...this.props} />
        {this.displayAddFriends()}
        {this.displayFriendsChoice()}
      </div>
    )
  }
}

export default ProfileHome;
