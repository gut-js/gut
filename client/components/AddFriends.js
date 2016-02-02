import React from 'react';

class AddFriends extends React.Component {
  render(){
    return(
      <div>
        <h1>Add Friends</h1>
        <div className='input-group'>
          <input className='form-control' type='text'  placeholder='Enter a username' />
          <span className='input-group-btn'>
            <button className='btn btn-default' type='button'>Search</button>
          </span>
        </div>
      </div>
    )
  }
}

export default AddFriends;
