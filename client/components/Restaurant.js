import React from 'react';

class Restaurant extends React.Component {
  render(){
  	console.log('helo from rest', this.props)
  	return (

	 	<div>
	 		<h3>{this.props.name}</h3>
	
	 	</div>
 	)
  }
}

export default Restaurant;