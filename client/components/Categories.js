import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

// test data
var categoryPrettyNames = _.uniq([ 'Salad', 'Pizza', 'Italian', 'Burgers', 'American (New)', 'Japanese', 'Japanese', 'Coffee & Tea', 'Wine Bars', 'Delis', 'Wine Bars', 'American (New)', 'Mediterranean', 'American (New)', 'Asian Fusion', 'Tapas/Small Plates', 'Italian', 'Beer Gardens', 'Live/Raw Food', 'American (New)' ])
var categoryUglyNames = _.uniq([ 'salad', 'pizza', 'italian', 'burgers', 'newamerican', 'japanese', 'japanese', 'coffee', 'wine_bars', 'delis', 'wine_bars', 'newamerican', 'mediterranean', 'newamerican', 'asianfusion', 'tapasmallplates', 'italian', 'beergardens', 'raw_food', 'newamerican' ])

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
          value={this.props.category1}
          onClick={this.handleClick}
        >
          {this.props.category1}
        </button>
        <button
          type='submit'
          className='btn col-md-7 center-block'
          value={this.props.category2}
          onClick={this.handleClick}
        >
          {this.props.category2}
        </button>
        <br />
      </p>
    )
  }
}

// a list of button pairs
class Categories extends React.Component {
  render(){
    var categoryButtons = categoryPrettyNames.map(function(category) {

      // select random categories for each button
      var category1 = categoryPrettyNames[Math.floor(Math.random()*categoryPrettyNames.length)]
      var category2 = categoryPrettyNames[Math.floor(Math.random()*categoryPrettyNames.length)]

      // ensure buttons show different categories
      while (category1 === category2) {
        category2 = categoryPrettyNames[Math.floor(Math.random()*categoryPrettyNames.length)]
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
