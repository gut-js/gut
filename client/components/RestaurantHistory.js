import React from 'react';
import { Button } from 'react-bootstrap';

class RestaurantHistory extends React.Component {
  render(){
    const { restaurantName, link } = this.props;
    return(
      <li className='list-group-item'>
        <h3>{restaurantName}</h3>
        <Button href={link}>Check it out on Yelp!</Button>
      </li>
    )
  }
}

export default RestaurantHistory;
