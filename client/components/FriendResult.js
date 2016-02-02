import React from 'react';

class FriendResult extends React.Component {
  render(){
    const { username } = this.props;

    return(
      <li className='list-group-item'>
        {username}
        <button className='badge'>
        <span className='glyphicon glyphicon-plus'>Add</span>
        </button>
      </li>
    )
  }
}

export default FriendResult;


// Todo:
// add Button
// remove button if friends already
