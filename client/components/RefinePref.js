import React from 'react';

//Components
import Poll from './Poll';
import DeletePref from './DeletePref';
import ProfilePic from './ProfilePic';

class RefinePref extends React.Component {
  constructor(){
    super();
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.displayPreferencePoll = this.displayPreferencePoll.bind(this);
    this.displayLoadingSpinner = this.displayLoadingSpinner.bind(this);
    this.openPicModal = this.openPicModal.bind(this);
    this.closePicModal = this.closePicModal.bind(this);
    this.state = {
      showDeleteModal: false,
      showPicModal: false
    }
  }

  openDeleteModal(){
    this.setState({
      showDeleteModal: true
    })
  }

  closeDeleteModal(){
    this.setState({
      showDeleteModal: false
    })
  }

  openPicModal(){
    this.setState({
      showPicModal: true
    })
  }

  closePicModal(){
    this.setState({
      showPicModal: false
    })
  }

  displayPreferencePoll(){
    if(this.props.isSubmitting){
      return(
        <Poll {...this.props} />
      )
    } else {
      return(
        <div>
          Save some food for tomorrow!
        </div>
      )
    }
  }

  displayLoadingSpinner(){
    if(this.props.isFetchingYelp){
      return(
        <div className='spinner'>
          <h1 className='cursive'>One moment please</h1>
          <image src='./../static/assets/spinner.gif' />
        </div>
      )
    } else {
      return null;
    }
  }

  render(){
    return(
      <div className='poll-header'>
        {this.displayPreferencePoll()}
        {this.displayLoadingSpinner()}
        <h3>Reset your Preferences</h3>
        <div>
          <button onClick={this.openDeleteModal}>
            Delete My Preferences
          </button>
          <DeletePref
            {...this.props}
            showDeleteModal={this.state.showDeleteModal}
            closeDeleteModal={this.closeDeleteModal} />
        </div>
        <h1>Profile Picture</h1>
        <div>
          <img src={this.props.avatarUrl}/>
          <button onClick={this.openPicModal}>
            Upload a Profile Pic
          </button>
          <ProfilePic
            {...this.props}
            showPicModal={this.state.showPicModal}
            closePicModal={this.closePicModal} />
        </div>
      </div>
    )
  }
}

export default RefinePref;
