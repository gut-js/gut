import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Signup extends React.Component {
  render(){
    console.log("in signup", this.props)
    return(
      <Modal show={this.props.showSignupModal} onHide={this.props.closeSignup}>
        <Modal.Header closeButton>
          <Modal.Title>
            Signup
          </Modal.Title>
          <Modal.Body>
            <form>
              <div className="form-group col-sm-10 col-md-push-1">
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group col-sm-10 col-md-push-1">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group col-sm-10 col-md-push-1">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group col-sm-10 col-md-push-1">
                <button type="submit" className="btn btn-block">Log in</button>
                <div>
                  Have an account? Click <a>here</a> to log in.
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default Signup;
