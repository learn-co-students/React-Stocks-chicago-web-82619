import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor () {
    super()
    this.state = {
      stonks: [],
      stonksP: [],
      filter: "Tech"
    }
  }

  handlePortfolioClick = (inStonk) => {
    const newStonks = this.state.stonksP.filter(stonk => inStonk !== stonk)
    this.setState({
      stonksP: newStonks
    })
  }

  handleStonkClick = (stonk) => {
    if (!this.state.stonksP.includes(stonk))
    {
      this.setState({
        stonksP: [...this.state.stonksP, stonk]
      })
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.setState({
        stonks: json
      })
    })
  }

  sortStonks = (event) => {
    console.log(event.target.value)
    if (event.target.value === "Price"){
      this.sortPrice()
    }
    else {
      this.sortAlpha()
    }
  }

  sortPrice = () => {
    const newStonks = this.state.stonks.sort((a, b) => {return b.price - a.price})
    this.setState({
      stonks: newStonks
    })
  }

  sortAlpha = () => {
    const newStonks = this.state.stonks.sort((a, b) => {return a.name > b.name ? 1 : -1})
    this.setState({
      stonks: newStonks
    })
  }

  changeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchBar changeFilter={this.changeFilter} sortStonks={this.sortStonks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.state.filter} handleStonkClick={this.handleStonkClick} stonks={this.state.stonks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleStonkClick={this.handlePortfolioClick} stonks={this.state.stonksP}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
