import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const pList = this.props.stonksp.map(stonk => {
      return <Stock handleStonkClick={this.props.handlePortfolioClick} stonk={stonk} />
    })
    return (
      <div>
        <h2>Stocks</h2>
        { pList }
      </div>
    );
  }

}

export default PortfolioContainer;
