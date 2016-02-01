import React from 'react';

//Components
import ProfileMenu from './ProfileMenu';
import FriendsPref from './FriendsPref';
import AddFriends from './AddFriends';
import LocationPref from './LocationPref';
import RestaurantPref from './RestaurantPref';

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
        <FriendsPref {...this.props} />
      )
    } else {
      return null;
    }
  }

  displayLocationChoice(){
    if(this.props.displayLocationChoice){
      return(
        <LocationPref {...this.props} />
      )
    } else {
      return null;
    }
  }

  displayResults(){
    if(this.props.displayResults){
      return(
        <RestaurantPref {...this.props} />
      )
    } else {
      return null;
    }
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
    console.log('props on profile', this.props);
    return(
      <div>
        <ProfileMenu {...this.props} />
        {this.displayAddFriends()}
        {this.displayLocationChoice()}
        {this.displayFriendsChoice()}
        {this.displayResults()}
      </div>
    )
  }
}

export default ProfileHome;
