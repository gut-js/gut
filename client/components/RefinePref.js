import React from 'react';

//Components
import Poll from './Poll';
import DeletePref from './DeletePref';

class RefinePref extends React.Component {
  constructor(){
    super();
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.displayPreferencePoll = this.displayPreferencePoll.bind(this);
    this.displayLoadingSpinner = this.displayLoadingSpinner.bind(this);
    this.state = {
      showDeleteModal: false,
    }
  }

  componentWillMount(){
    const { fetchYelpData } = this.props.pollActions;

    fetchYelpData();
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
        <div>
          <h1>One moment please</h1>
          <image src='./../static/assets/spinner.gif' />
        </div>
      )
    } else {
      return null;
    }
  }

  render(){
    return(
      <div>
        <h1>Refine your Preferences.</h1>
        {this.displayLoadingSpinner()}
        {this.displayPreferencePoll()}
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
      </div>
    )
  }
}

export default RefinePref;
