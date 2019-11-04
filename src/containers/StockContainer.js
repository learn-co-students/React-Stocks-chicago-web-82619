import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const stonksList = this.props.stonks.map(stonk =>{
      if (stonk.type === this.props.filter){
       return <Stock key={stonk.id} handleStonkClick={this.props.handleStonkClick} stonk={stonk}/>
      }
    }) 
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          stonksList
        }
      </div>
    );
  }

}

export default StockContainer;
