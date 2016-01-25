import React, { PropTypes } from 'react';

class Signup extends React.Component {
  render(){
    return(
      <div className='col-sm-12 col-md-4 col-md-pull-1'>
        <h1>Signup</h1>
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
      </div>
    )
  }
}

export default Signup;
