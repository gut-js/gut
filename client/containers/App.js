import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hello from './../components/Hello'
import * as HelloActions from './../actions/actions'

function mapStateToProps(state){
  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(HelloActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
