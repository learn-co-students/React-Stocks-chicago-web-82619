import React from 'react'

const Stock = props => (
  <div onClick={() => props.handleStonkClick(props.stonk)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.stonk.name
          }</h5>
        <p className="card-text">{props.stonk.ticker}: {props.stonk.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
