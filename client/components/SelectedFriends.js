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
      for(var key in diners){
        return(
          <SelectedFriendEntry
            removeFromDiners={removeFromDiners}
            diner={diners[key]}
            key={key} />
        )
      }
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
