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
    console.log('props in selected frend', this.props);
    return(
      <div>
        <h2>{this.props.diner.friendName}</h2>
        <img src={this.props.diner.photo} />
        <button onClick={this.unselectDiner}>Remove Diner</button>
      </div>
    )
  }
}

export default SelectedFriendEntry;
