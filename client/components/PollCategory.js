import React from 'react';
import { Button } from 'react-bootstrap';

class PollCategory extends React.Component {
  constructor(){
    super();
    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(e){
    const {sendPollChoices, updatePoll} = this.props.pollActions;
    let selected, unselected;
    if (e.target.alt === 'choice1') {
      selected = this.props.data[0].categories;
      unselected = this.props.data[1].categories;
    } else if (e.target.alt === 'choice2') {
      selected = this.props.data[1].categories;
      unselected = this.props.data[0].categories;
    }
    const response = {
      selected: selected,
      unselected: unselected,
      username: this.props.username.username
    }
    sendPollChoices(response);
    updatePoll(this.props.data);
  }

  render(){
    return (
      <div>
        <img src={this.props.data[0].image_url} alt='choice1' onClick={this.selectImage} />
        <img src={this.props.data[1].image_url} alt='choice2' onClick={this.selectImage} />
      </div>
    )
  }
}

export default PollCategory;
