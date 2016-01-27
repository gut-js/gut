import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

var test = _.uniq([ [ 'American (New)', 'newamerican' ], [ 'Asian Fusion', 'asianfusion' ], [ 'Beer Gardens', 'beergardens' ], [ 'Burgers', 'burgers' ], [ 'Coffee & Tea', 'coffee' ], [ 'Delis', 'delis' ], [ 'Italian', 'italian' ], [ 'Japanese', 'japanese' ], [ 'Live/Raw Food', 'raw_food' ], [ 'Mediterranean', 'mediterranean' ], [ 'Pizza', 'pizza' ], [ 'Salad', 'salad' ], [ 'Tapas/Small Plates', 'tapasmallplates' ], [ 'Wine Bars', 'wine_bars' ] ]);

var counter = {}

var poll = {
  questions: []
}

class Poll extends React.Component {
  constructor(){
    super();
    this.state = {
      responses: [],
      step: 0
    };
  }

  render(){
    return (
      <div>
        <h1>which do you prefer?</h1>
        <CategoryPair />
      </div>
    )
  }
}

class CategoryPair extends React.Component {
  constructor(){
    super();
    this.state = {
      category1: null,
      category2: null
    };
  }

  randomize(){
    this.state.category1 = test[Math.floor(Math.random()*test.length)]
    this.state.category2 = test[Math.floor(Math.random()*test.length)]
    while (this.state.category1 === this.state.category2) {
      this.state.category2 = test[Math.floor(Math.random()*test.length)]
    }
    if (!counter[this.state.category1[1]]) {
      counter[this.state.category1[1]] = [0, 1]
    } else {
      counter[this.state.category1[1]][1]++
    };
    if (!counter[this.state.category2[1]]) {
      counter[this.state.category2[1]] = [0, 1]
    } else {
      counter[this.state.category2[1]][1]++
    };
  }

  render(){
    this.randomize();
    return(
      <div>
        <CategoryButton category={this.state.category1} />
        <CategoryButton category={this.state.category2} />
      </div>
    )
  }
}

class CategoryButton extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log('user selected', e.target.value);
    counter[e.target.value][0]++
    console.log('counter:', counter);
  }

  render(){
    return(
      <div>
        <button
          type='submit'
          className='btn col-md-7 center-block'
          value={this.props.category[1]}
          onClick={this.handleClick}
        >
          {this.props.category[0]}
        </button>
      </div>
    )
  }
}

export default Poll;
