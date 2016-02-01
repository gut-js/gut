import React from 'react';

//Components
import ProfileMenu from './ProfileMenu';
import DinersPage from './DinersPage';
import AddFriends from './AddFriends';

//containers
import TopRestaurants from './../containers/TopRestaurants';

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
    // if(this.props.displayResults){
    //   return(
    //     <TopRestaurants {...this.props} />
    //   )
    // } else {
    //   return null;
    // }
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
        {this.displayFriendsChoice()}
        {this.displayResults()}
        {this.displayAddFriends()}
      </div>
    )
  }
}

export default ProfileHome;
