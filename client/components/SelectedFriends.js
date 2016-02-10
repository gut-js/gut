import React from 'react';

//Components
import SelectedFriendEntry from './SelectedFriendEntry';

class SelectedFriends extends React.Component {
  constructor(){
    super();
    this.displaySelected = this.displaySelected.bind(this);
  }

  displaySelected(){
    const { removeFromDiners } = this.props.dinerActions;
    const diners = this.props.diners.slice(1);

    if(diners.length > 0){
      return diners.map((diner, ind) => {
        return(
          <SelectedFriendEntry
            removeFromDiners={removeFromDiners}
            diner={diner}
            key={ind} />
        )
      });
    } else {
      return(
        <div>
          Please select friends!
        </div>
      )
    }
  }

  render(){
    console.log('props in selected friends list', this.props);
    return(
      <div>
        {this.displaySelected()}
      </div>
    )
  }
}

export default SelectedFriends;
