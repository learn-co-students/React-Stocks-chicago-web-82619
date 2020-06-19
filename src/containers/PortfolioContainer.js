import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const stonksList = this.props.stonks.map(stonk => <Stock key={stonk.id} handleStonkClick={this.props.handleStonkClick} stonk={stonk}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            stonksList
          }
      </div>
    );
  }

}

export default PortfolioContainer;
