import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as dinerActions from './../actions/dinerActions'

//Components
import DinersPage from './../components/DinersPage';

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
       <DinersPage dinerActions={this.props.dinerActions} diners={this.props.diners} recommendations={this.props.recommendations} username={this.props.username} location={this.props.location} />
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
    location: state.dinerReducer.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dinerActions: bindActionCreators(dinerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diners);
