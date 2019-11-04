import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const portfolio = this.props.portfolio.map(stock => {
      return <Stock stock={stock} key={stock.id} stockListener={this.props.removeFrormPortfolio} />
    })

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            portfolio
          }
      </div>
    );
  }

}

export default PortfolioContainer;
