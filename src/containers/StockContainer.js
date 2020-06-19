import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    const filteredStocks = this.props.stocks.filter(stock => stock.type === this.props.filter)

    const stocks = filteredStocks.map(stock => {
      return <Stock stock={stock} key={stock.id} stockListener={this.props.addToPortfolio}/>
    })
    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    );
  }

}

export default StockContainer;
