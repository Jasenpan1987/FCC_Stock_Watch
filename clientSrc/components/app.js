import React, { Component } from 'react';

import AddStock from './newStockBox';
import StockList from './stockList';
import StockChart from './stockChart'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Stock Search App</h1>
        <div className="row">
            <StockChart />
            <AddStock />
            <StockList />
        </div>
      </div>
    );
  }
}
