import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    filter: "Tech",
    portfolio: [],
    stocks: []
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/stocks`)
      .then(resp => resp.json())
      .then(stocksData => this.setState({stocks: stocksData}))
  }

  addToPortfolio = (stock) => {
    console.log('stock', stock)
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }

    console.log('portfolio', this.state.portfolio)
  }

  removeFrormPortfolio = (stockObj) => {
    const portfolio = this.state.portfolio.filter(stock => {
      return stock.id !== stockObj.id
    })
    this.setState({
      portfolio
    })
  }

  filterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }


  handleSortChange = (event) => {
    console.log(event.target.value)
    if (event.target.value === 'Alphabetically') {
      const alphaSort = this.state.stocks.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      })
      this.setState({stocks: alphaSort})
    } else if (event.target.value === 'Price') {
      const priceSort = this.state.stocks.sort((a, b) => {
        return a.price < b.price ? -1 : 1;
      })
      this.setState({stocks: priceSort})
    }
  }


  render() {
    return (
      <div>
        <SearchBar filterChange={this.filterChange} handleSortChange={this.handleSortChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.state.filter} stocks={this.state.stocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFrormPortfolio={this.removeFrormPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
