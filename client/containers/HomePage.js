import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as HelloActions from './../actions/actions';

//Components
import Login from './../components/Login';
import Signup from './../components/Signup';

class HomePage extends React.Component {
  render(){
    return (
      <div>
        <Login {...this.props}/>
        <Signup {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(HelloActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
