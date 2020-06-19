import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stonks: [],
    stonksp: [],
    filter: "Tech"
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stonks => {
      this.setState({
        stonks: stonks 
      })
    })
  }

  handleStonkClick = (stonk) => {
    if(!this.state.stonksp.includes(stonk)) {
      let portfolio = [...this.state.stonksp, stonk]
      this.setState({
        stonksp: portfolio
      })
    }
  }

  handlePortfolioClick = (inStonk) => {
    const newStonks = this.state.stonksp.filter(stonk => stonk !== inStonk)
    this.setState({
      stonksp: newStonks
    })
  }

  updateFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  handleRadioBtn = (e) => {
    if(e.target.value === 'Alphabetically') {
      const alphaSort = this.state.stonks.sort((a, b) => {
          return a.name < b.name ? -1 : 1;
      })
      this.setState({
        stonks: alphaSort
      })
    } else if(e.target.value === 'Price') {
      const priceSort = this.state.stonks.sort((a, b) => {
        return a.price < b.price ? -1 : 1;
      })
      this.setState({
        stonks: priceSort
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar handleRadioBtn={this.handleRadioBtn} updateFilter={this.updateFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.state.filter} handleStonkClick={this.handleStonkClick} stonks={this.state.stonks} />

            </div>
            <div className="col-4">

              <PortfolioContainer handlePortfolioClick={this.handlePortfolioClick} stonksp={this.state.stonksp}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
