import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const stonkList = this.props.stonks.filter(stonk => stonk.type === this.props.filter)
    const filtered = stonkList.map(stonk => {
      return <Stock handleStonkClick={this.props.handleStonkClick} stonk={stonk} />
    })
    return (
      <div>
        <h2>Stocks</h2>
        { filtered }
      </div>
    );
  }

}

export default StockContainer;
