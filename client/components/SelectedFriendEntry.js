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

  displayProfilePic(){
    const { diner } = this.props;
    var picPath = "./../static/assets/avatar/" + diner;
    return(
      <img src={picPath}/>
    )
  }

  render(){
    return(
      <div>
        <h2>{this.props.diner}</h2>
        {this.displayProfilePic()}
        <button onClick={this.unselectDiner}>Remove Diner</button>
      </div>
    )
  }
}

export default SelectedFriendEntry;
