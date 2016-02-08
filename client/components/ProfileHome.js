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
      if(!beenTo.test){
        return(
          <div>
            <h1>Select a location to get started.</h1>
            <LocationPref {...this.props} />
          </div>
        )
      } else {
        for(var key in beenTo){
          history.push(<RestaurantHistory
            restaurantName={beenTo[key].name}
            link={beenTo[key].url}
            key={key} />);
        }

        return(
          <div>
            <h1>History</h1>
            <ul className='list-group'>
              {history}
            </ul>
            <LocationPref {...this.props} />
          </div>
        )
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
    console.log('props in profile home', this.props);
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
