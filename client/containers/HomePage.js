import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gravatar from 'react-gravatar';

//Actions
import * as authActions from './../actions/authActions';

//Components
import Navigation from './../components/Navigation';
import SignIn from './../components/SignIn';
import Register from './../components/Register';

class HomePage extends React.Component {
  constructor(){
    super();
    this.openSignIn = this.openSignIn.bind(this);
    this.closeSignIn = this.closeSignIn.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.closeRegister = this.closeRegister.bind(this);
    this.state = {
      showSignInModal: false,
      showRegisterModal: false
    }
  }

  openSignIn(){
    this.setState({
      showSignInModal: true
    })
  }

  closeSignIn(){
    this.setState({
      showSignInModal: false
    })
  }

  openRegister(){
    this.setState({
      showRegisterModal: true
    })
  }

  closeRegister(){
    this.setState({
      showRegisterModal: false
    })
  }

  render(){
    return (
      <div className='home'>
        <div id="bg-fade-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active">
                    <div className="slide1"></div>
                </div>
                <div className="item">
                    <div className="slide2"></div>
                </div>
                <div className="item">
                    <div className="slide3"></div>
                </div>
                <div className="item">
                    <div className="slide4"></div>
                </div>
                <div className="item">
                    <div className="slide5"></div>
                </div>
            </div>
            <div className="container carousel-overlay text-center">
                <image height='100px' src="./../static/assets/snap_pea_logo.png"/>
                <p className="lead" >Follow Your Gut</p>
                <a 
                  className="btn btn-lg btn-success fp-buttons"
                  href="#" 
                  onClick={this.openSignIn}>
                  Sign In
                  <SignIn
                    {...this.props}
                    showSignInModal={this.state.showSignInModal}
                    closeSignIn={this.closeSignIn}
                    openRegister={this.openRegister} />
                </a>
                <a 
                  className="btn btn-lg btn-success fp-buttons"
                  href="#"
                  onClick={this.openRegister}>
                  Register
                  <Register
                    {...this.props}
                    showRegisterModal={this.state.showRegisterModal}
                    closeRegister={this.closeRegister}
                    openSignIn={this.openSignIn} />
                </a>
            </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.authReducer.isFetching,
    authErrorMsg: state.authReducer.authErrorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
