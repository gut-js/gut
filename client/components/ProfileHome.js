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
    const { beenTo } = this.props;
    let history = [];

    if(this.props.displayProfileHome){
      if(beenTo.length === 0){
        return(
          <div>
            <h1>Select a location to get started.</h1>
            <LocationPref {...this.props} />
          </div>
        )
      } else {
        history = beenTo.map((res, ind) => {
          return (
            <RestaurantHistory
              restaurantName={res.name}
              link={res.url}
              date={res.date}
              key={ind} />
          );
        }).slice(0,5);

        return(
          <div>
            <h1>History</h1>
            <ul className='list-group'>
              {history}
            </ul>
            <LocationPref {...this.props} />
          </div>
        );
      }
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
