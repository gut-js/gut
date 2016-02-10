import React from 'react';

class SelectedFriendEntry extends React.Component {
  constructor(){
    super();
    this.unselectDiner = this.unselectDiner.bind(this);
  }

  unselectDiner(){
    const { diner, removeFromDiners } = this.props;

    removeFromDiners(diner);
  }

  render(){
    return(
      <li className='list-group-item friend-entry'>
        <button className='remove-diner' onClick={this.unselectDiner}>Remove</button>
        <h3>{this.props.diner.friendName}</h3>
        <img src={this.props.diner.photo} />
      </li>
    )
  }
}

export default SelectedFriendEntry;
