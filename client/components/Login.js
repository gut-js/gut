import React, { PropTypes } from 'react';

class Login extends React.Component {
  render(){
    return(
      <div className='col-sm-12 col-md-4 col-md-pull-1'>
        <h1>Login</h1>
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
      </div>
    )
  }
}

export default Login;
