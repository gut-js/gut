import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

// test data
var categoryNames = _.uniq([ [ 'American (New)', 'newamerican' ], [ 'Asian Fusion', 'asianfusion' ], [ 'Beer Gardens', 'beergardens' ], [ 'Burgers', 'burgers' ], [ 'Coffee & Tea', 'coffee' ], [ 'Delis', 'delis' ], [ 'Italian', 'italian' ], [ 'Japanese', 'japanese' ], [ 'Live/Raw Food', 'raw_food' ], [ 'Mediterranean', 'mediterranean' ], [ 'Pizza', 'pizza' ], [ 'Salad', 'salad' ], [ 'Tapas/Small Plates', 'tapasmallplates' ], [ 'Wine Bars', 'wine_bars' ] ]);

// counter object
var counter = {}

// a pair of buttons with category labels
class CategoryPair extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log('you chose', e.target.value);
    if (!counter[e.target.value]) {
      counter[e.target.value] = 1
    } else {
      counter[e.target.value]++
    };
    console.log(counter);
  }

  render(){
    return(
      <p>
        <button
          type='submit'
          className='btn col-md-7 center-block'
          value={this.props.category1[1]}
          onClick={this.handleClick}
        >
          {this.props.category1[0]}
        </button>
        <button
          type='submit'
          className='btn col-md-7 center-block'
          value={this.props.category2[1]}
          onClick={this.handleClick}
        >
          {this.props.category2[0]}
        </button>
        <br />
      </p>
    )
  }
}

// a list of button pairs
class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      responses: []
    };
  }

  render(){
    var categoryButtons = categoryNames.map(function(category) {

      // select random categories for each button
      var category1 = categoryNames[Math.floor(Math.random()*categoryNames.length)]
      var category2 = categoryNames[Math.floor(Math.random()*categoryNames.length)]

      // ensure buttons show different categories
      while (category1 === category2) {
        category2 = categoryNames[Math.floor(Math.random()*categoryNames.length)]
      };

      return(
        <CategoryPair key={category} category1={category1} category2={category2} />
      )
    })
    return(
      <div>
        {categoryButtons}
      </div>
    )
  }
}

export default Categories;
