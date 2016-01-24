import React, { PropTypes } from 'react';

class Hello extends React.Component{
  render(){
    console.log(this.props);

    const { daisy, shin, justin, carl, text } = this.props

     return(
      <div>
        {text}
        <hr/>
        <button onClick={daisy}>Daisy</button>
        <button onClick={shin}>Shin</button>
        <button onClick={justin}>Justin</button>
        <button onClick={carl}>Carl</button>
      </div>
    )
  }
}

export default Hello;
