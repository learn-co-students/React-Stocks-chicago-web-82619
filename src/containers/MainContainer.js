import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filteredStocks: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(dataStocks => {
        this.setState({
          stocks: dataStocks
        })
      })
  }

  addToPortfolio = (stock) => {
    if(!this.state.portfolio.includes(stock)){
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }
  }

  removeFromPortfolio = (stockk) => {
    const updatedPortfolio = this.state.portfolio.filter(stock => stock !== stockk)
    this.setState({
      portfolio: updatedPortfolio
    })
  }

  filterStocks = (value) => {
    const filtStocks = this.state.stocks.filter(stock => stock.type === value)
    this.setState({filteredStocks: filtStocks})
  }

  sortStocks = (value) => {
    if(value.toLowerCase() === 'alphabetically') {
      const sorted = this.state.stocks.sort((a, b) => a.name.localeCompare(b.name))
      this.setState({stocks: sorted})
    } else if(value.toLowerCase() === 'price') {
      const sorted = this.state.stocks.sort((a, b) => b.price - a.price)
      this.setState({stocks: sorted})
    }
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.filteredStocks ? this.state.filteredStocks : this.state.stocks} addToPortfolio={this.addToPortfolio}/>
            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
