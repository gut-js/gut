import React from 'react';

class Friend extends React.Component {
  render(){
    return(
      <li className='list-group-item'>
        <button className='badge'>
          <span className='glyphicon glyphicon-minus'>
          Remove
          </span>
        </button>
        <span className='badge'>
          {Object.keys(this.props.categories).length} Categories
        </span>
        <p>{this.props.username}</p>
      </li>
    )
  }
}

export default Friend;
