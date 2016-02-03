import React from 'react';

class SelectedFriendEntry extends React.Component {
  constructor(){
    super();
    this.unselectDiner = this.unselectDiner.bind(this);
  }

  unselectDiner(){
    const { diner, removeFromDiners } = this.props;

    console.log('remove this person:', diner);
  }

  render(){

    return(
      <div>
        <h2>{this.props.diner}</h2>
        <button onClick={this.unselectDiner}>Remove Diner</button>
      </div>
    )
  }
}

export default SelectedFriendEntry;
