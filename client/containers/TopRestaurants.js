import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Actions
import * as dinerActions from './../actions/dinerActions'

//Components
import Restaurant from './../components/Restaurant';

class TopRestaurants extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    const {fetchSnapPeaData} = this.props.dinerActions;
    const {loadTopRestaurant} = this.props.dinerActions;
    fetchSnapPeaData();
    loadTopRestaurant(); //setstoprestaurant
  }

  render(){
    return (
      <div>
       <Restaurant dinerActions={this.props.dinerActions} diners={this.props.diners} recommendations={this.props.recommendations} username={this.props.username} topRestaurant={this.props.topRestaurant} index={this.props.index} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TopRestaurants);
