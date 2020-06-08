import React, { Component } from 'react';
import Stock from '../components/Stock';

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map((stock, idx) => {
          return (
            <Stock
              key={idx}
              stock={stock}
              stockListener={this.props.handleBuyStock}
            />
          );
        })}
      </div>
    );
  }
}

export default StockContainer;
