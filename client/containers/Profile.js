import React from 'react';

// Containers
import RestaurantList from './RestaurantList';

class Profile extends React.Component {
  render(){
    return(
      <div>
        THIS IS YOUR PROFILE!
        <RestaurantList
        {...this.props}/>
      </div>
    )
  }
}

export default Profile;
