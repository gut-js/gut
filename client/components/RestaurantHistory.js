import React from 'react';
import { Button } from 'react-bootstrap';

class RestaurantHistory extends React.Component {
  render(){
    const { restaurantName, link, date, city } = this.props;
    return (
      <div>
        <li className='list-group-item'>
          <a href={link} target='_blank'><h3>{restaurantName}</h3></a>
          <p>{city}</p>
          <p>Visited on {date}</p>
        </li>
      </div>
    )
  }
}

export default RestaurantHistory;
