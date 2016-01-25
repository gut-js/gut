import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Login extends React.Component {
  render(){
    return(
      <Modal show={this.props.showLoginModal} onHide={this.props.closeLogin}>
        <Modal.Header closeButton>
          <Modal.Title>
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group col-sm-10 col-md-push-1">
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group col-sm-10 col-md-push-1">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group col-sm-10 col-md-push-1">
              <button type="submit" className="btn btn-block">Log in</button>
              <div>
                Dont have an account? Click <a>here</a> to sign up.
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Login;
