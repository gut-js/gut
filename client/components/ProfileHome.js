import React from 'react';

//Components
import FriendsPref from './FriendsPref';
import Friends from './Friends';
import LocationPref from './LocationPref';
import RestaurantPref from './RestaurantPref';
import RefinePref from './RefinePref';
import RestaurantHistory from './RestaurantHistory';

class ProfileHome extends React.Component {
  constructor(){
    super();
    this.displayHome = this.displayHome.bind(this);
    this.displayFriendsChoice = this.displayFriendsChoice.bind(this);
    this.displayLocationChoice = this.displayLocationChoice.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.displayFriends = this.displayFriends.bind(this);
    this.displayPreferences = this.displayPreferences.bind(this);
  }

  displayHome(){
    if(this.props.displayProfileHome){
      return(
        <div>
          <RestaurantHistory />
          <LocationPref {...this.props} />
        </div>
      )
    } else {
      return null;
    }
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

  displayFriends(){
    if(this.props.displayAddFriends){
      return(
        <Friends {...this.props} />
      )
    } else {
      return null;
    }
  }

  displayPreferences(){
    if(this.props.displayPreferences){
      return(
        <RefinePref {...this.props} />
      )
    } else {
      return null;
    }
  }

  render(){
    console.log('props in home', this.props);
    return(
      <div>
        {this.displayHome()}
        {this.displayLocationChoice()}
        {this.displayFriendsChoice()}
        {this.displayResults()}
        {this.displayFriends()}
        {this.displayPreferences()}
      </div>
    )
  }
}

export default ProfileHome;
