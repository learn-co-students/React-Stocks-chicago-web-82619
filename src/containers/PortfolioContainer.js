import React, { Component } from 'react';
import Stock from '../components/Stock';

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map((stock, idx) => {
          return (
            <Stock
              key={idx}
              stock={stock}
              stockListener={this.props.handleSellStock}
            />
          );
        })}
      </div>
    );
  }
}

export default PortfolioContainer;
