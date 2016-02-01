import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as dinerActions from './../actions/dinerActions'

//Components
import FriendsPref from './../components/FriendsPref';

class Diners extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    console.log('componentwillmount: ', this.props)
  }

  render(){
    return (
      <div>
        <FriendsPref
          dinerActions={this.props.dinerActions}
          diners={this.props.diners}
          recommendations={this.props.recommendations}
          username={this.props.username}
          topRestaurant={this.props.topRestaurant}
          index={this.props.index} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('diners state', state)
  return {
    diners: state.dinerReducer.diners,
    recommendations: state.dinerReducer.recommendations,
    username: state.authReducer.username,
    topRestaurant: state.dinerReducer.topRestaurant,
    index: state.dinerReducer.index
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dinerActions: bindActionCreators(dinerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diners);
