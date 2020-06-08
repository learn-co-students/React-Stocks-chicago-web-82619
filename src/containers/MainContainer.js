import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

class MainContainer extends Component {
  state = {
    stocks: [],
    type: 'none',
    sort: 'null',
    myStocks: [],
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:3000/stocks')
      .then((data) => this.setState({ stocks: data.data }));
  };

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  };

  handleBuyStock = (selectedStock) => {
    this.setState({
      myStocks: [...this.state.myStocks, selectedStock],
    });
  };

  render() {
    console.log(this.state);

    let displayedStocks = [...this.state.stocks];
    if (this.state.type === 'Tech') {
      displayedStocks = displayedStocks.filter(
        (stock) => stock.type === 'Tech'
      );
    } else if (this.state.type === 'Finance') {
      displayedStocks = displayedStocks.filter(
        (stock) => stock.type === 'Finance'
      );
    } else if (this.state.type === 'Sportswear') {
      displayedStocks = displayedStocks.filter(
        (stock) => stock.type === 'Sportswear'
      );
    }

    if (this.state.sort === 'Alphabetically') {
      displayedStocks = displayedStocks.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    } else if (this.state.sort === 'Price') {
      displayedStocks = displayedStocks.sort((a, b) => a.price - b.price);
    }

    let myDisplayedStock = [...this.state.myStocks];

    return (
      <div>
        <SearchBar
          handleTypeChange={this.handleTypeChange}
          handleSort={this.handleSort}
          sort={this.state.sort}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={displayedStocks}
              handleBuyStock={this.handleBuyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer stocks={myDisplayedStock} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
