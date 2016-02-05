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
                &nbsp;&nbsp;
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
<<<<<<< 5a9291888caf275ea0b1a143c75316f3fb896df8
<<<<<<< 9de174fae304f529e9979c90809dbca91255a819
<<<<<<< bb8b560ac0ba428a60623fdcb18975d34d840916
=======
>>>>>>> [style] adds 'how it works' and 'meet the team' to /homepage
=======
<<<<<<< f99759db7e177754ec29b5c9efc4ff1903d147dc
>>>>>>> [style] sets up meet the team section on /homepage

        <div className="container howitworks text-center">
          <h1 className="about-title">How It Works</h1>

          <div className="row text-center">
            <span className="how col-md-4">
              <h4 className="works-description">Take the indecision out of dining out </h4>
              <image className="img-rounded works-pic" height="200px" src="http://jenwoo.17lemurs.com/47/wp-content/uploads/dumplings.jpg"/>
              <h4 className="works-description"> Step 1: Choose your Favorite Photos </h4>
            </span>
            <span className="how col-md-4">
              <h4 className="works-description">Explore unexpected culinary delights </h4>
              
              <image className="img-rounded works-pic" height="200px" src="http://www.sawleaf.com/wp-content/uploads/2015/05/Street-Food-Restaurant-on-Phan-Van-Dong-Street-Go-Vap-District-HCMC-04497_web_1024x683.jpg"/>
              <h4 className="works-description"> Step 2: Select a Location (and Invite Friends)</h4>
            </span>
            <span className="how col-md-4">
              <h4 className="works-description">Optimize all your group searches</h4>
              <image className="img-rounded works-pic" height="200px" src="http://e.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2015/07/3049165-poster-p-1-google-searches-now-show-when-a-restaurant-is-busiest.jpg"/>
              <h4 className="works-description">Step 3: Get Custom-Tailored Recommendations</h4>
            </span>
          </div>
          
        </div>
        
<<<<<<< 9de174fae304f529e9979c90809dbca91255a819
        <div className="container team text-center">
          <h1 className="team-title">Meet the SnapPea Team</h1>
=======
        <div className="container team text-center">
          <h1 className="about-title">Meet the SnapPea Team</h1>
>>>>>>> [style] sets up meet the team section on /homepage
<<<<<<< 5a9291888caf275ea0b1a143c75316f3fb896df8
=======
        <div className="container team text-center">
          <h1 className="team-title">Meet the SnapPea Team</h1>
>>>>>>> [style] adds 'how it works' and 'meet the team' to /homepage
=======
>>>>>>> [style] sets up meet the team section on /homepage
          <div className="snappers">
            <div className="row">
              <span className="team-member col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Daisy Tsao</h3>
<<<<<<< 5a9291888caf275ea0b1a143c75316f3fb896df8
<<<<<<< 9de174fae304f529e9979c90809dbca91255a819
<<<<<<< bb8b560ac0ba428a60623fdcb18975d34d840916
=======
<<<<<<< f99759db7e177754ec29b5c9efc4ff1903d147dc
>>>>>>> [style] sets up meet the team section on /homepage
                <a href="https://www.linkedin.com/in/daisytsao"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/madcurie" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and enforcing chores.</h5>
              </span>
              <span className="team-member col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Carl Bernardo</h3>
                <a href="https://www.linkedin.com/in/carlbernardo"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/carlbernardo" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and hipster coffee joints.</h5>
              </span>
              <span className="team-member col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Justin Tan</h3>
                <a href="https://www.linkedin.com/in/justanman"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/justanman" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
=======
                <a href="https://www.linkedin.com/in/daisytsao"><i className="fa fa-linkedin-square fa-3x"></i></a>
                <a href="https://github.com/madcurie" target="_blank"><i className="fa fa-github-square fa-3x"></i></a>
<<<<<<< 5a9291888caf275ea0b1a143c75316f3fb896df8
=======
                <a href="https://www.linkedin.com/in/daisytsao"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/madcurie" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
>>>>>>> [style] adds 'how it works' and 'meet the team' to /homepage
                <h5>Likes React, Redux, and enforcing chores.</h5>
              </span>
              <span className="team-member col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Carl Bernardo</h3>
                <a href="https://www.linkedin.com/in/carlbernardo"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/carlbernardo" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and hipster coffee joints.</h5>
              </span>
              <span className="team-member col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Justin Tan</h3>
<<<<<<< 9de174fae304f529e9979c90809dbca91255a819
                <a href="https://www.linkedin.com/in/justanman"><i className="fa fa-linkedin-square fa-3x"></i></a>
                <a href="https://github.com/justanman" target="_blank"><i className="fa fa-github-square fa-3x"></i></a>
>>>>>>> [style] sets up meet the team section on /homepage
=======
                <a href="https://www.linkedin.com/in/justanman"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/justanman" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
>>>>>>> [style] adds 'how it works' and 'meet the team' to /homepage
=======
                <h5>Likes React, Redux, and enforcing chores.</h5>
              </span>
              <span className="team-member2 col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Carl Bernardo</h3>
                <a href="https://www.linkedin.com/in/carlbernardo"><i className="fa fa-linkedin-square fa-3x"></i></a>
                <a href="https://github.com/carlbernardo" target="_blank"><i className="fa fa-github-square fa-3x"></i></a>
                <h5>Likes React, Redux, and hipster coffee joints.</h5>
              </span>
              <span className="team-member2 col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Justin Tan</h3>
                <a href="https://www.linkedin.com/in/justanman"><i className="fa fa-linkedin-square fa-3x"></i></a>
                <a href="https://github.com/justanman" target="_blank"><i className="fa fa-github-square fa-3x"></i></a>
>>>>>>> [style] sets up meet the team section on /homepage
>>>>>>> [style] sets up meet the team section on /homepage
                <h5>Likes React, Redux, and paying half price for everything.</h5>
              </span>
              <span className="team-member col-md-3">
                <image className="img-circle" height="135px" src="https://avatars3.githubusercontent.com/u/9559638?v=3&s=400"/>
                <h3 className="member-name" >Shin Adachi</h3>
<<<<<<< 5a9291888caf275ea0b1a143c75316f3fb896df8
<<<<<<< 9de174fae304f529e9979c90809dbca91255a819
<<<<<<< bb8b560ac0ba428a60623fdcb18975d34d840916
                <a href="https://www.linkedin.com/in/shin064"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="http://www.shinadachi.com" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
=======
                <a href="https://www.linkedin.com/in/shin064"><i className="fa fa-linkedin-square fa-3x"></i></a>
                <a href="http://www.shinadachi.com" target="_blank"><i className="fa fa-github-square fa-3x"></i></a>
>>>>>>> [style] sets up meet the team section on /homepage
=======
                <a href="https://www.linkedin.com/in/shin064"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="http://www.shinadachi.com" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
>>>>>>> [style] adds 'how it works' and 'meet the team' to /homepage
=======
<<<<<<< f99759db7e177754ec29b5c9efc4ff1903d147dc
                <a href="https://www.linkedin.com/in/shin064"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="http://www.shinadachi.com" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
=======
                <a href="https://www.linkedin.com/in/shin064"><i className="fa fa-linkedin-square fa-3x"></i></a>
                <a href="http://www.shinadachi.com" target="_blank"><i className="fa fa-github-square fa-3x"></i></a>
>>>>>>> [style] sets up meet the team section on /homepage
>>>>>>> [style] sets up meet the team section on /homepage
                <h5>Likes React, Redux, and NPR podcasts.</h5>
              </span>
            </div>
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
