import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchSnapPeaData} from './../actions/dinerActions'

//Actions
import * as dinerActions from './../actions/dinerActions'

//Components
import Restaurant from './../components/Restaurant';

class TopRestaurants extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    console.log('componentwillmount: ', this.props)
    console.log('fetch', fetchSnapPeaData);
    fetchSnapPeaData();
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
