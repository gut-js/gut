import React from 'react';

class PollCategory extends React.Component {
  constructor(){
    super();
    this.selectImage = this.selectImage.bind(this);
    this.displayPoll = this.displayPoll.bind(this);
  }

  selectImage(e){
    const { sendPollChoices, updatePoll, endPoll } = this.props.pollActions;
    const { username } = this.props;
    let selected, unselected;

    if(e.target.alt === 'choice1') {
      selected = this.props.data[0].categories;
      unselected = this.props.data[1].categories;
    } else if (e.target.alt === 'choice2') {
      selected = this.props.data[1].categories;
      unselected = this.props.data[0].categories;
    }

    const response = {
      selected: selected,
      unselected: unselected,
      username: username
    }

    if(this.props.data.length === 2){
      endPoll(username);
    } else {
      sendPollChoices(response);
      updatePoll(this.props.data);
    }
  }

  displayPoll(){
    if(this.props.data.length > 1){
      return(
        <div className='row poll'>
          <div className='col-sm-12 col-md-6 choice-one'>
            <img
              src={this.props.data[0].image_url}
              alt='choice1'
              height='350px'
              width='350px'
              className='image-one'
              onClick={this.selectImage} />
          </div>
          <div className='col-sm-12 col-md-6 choice-two'>
            <img
            src={this.props.data[1].image_url}
            alt='choice2'
            height='350px'
            width='350px'
            className='image-two'
            onClick={this.selectImage} />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  render(){
    return (
      <div>
        {this.displayPoll()}
      </div>
    )
  }
}

export default PollCategory;
