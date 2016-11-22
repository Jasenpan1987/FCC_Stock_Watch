import React, { Component } from 'react';

class StockBox extends Component {
    constructor(props){
        super(props);
    }

    handleRemoveStock(){
        this.props.removeStock(this.props.stockCode);
    }

    render(){
        return (
            <div className="col-md-4">
                <h2>{this.props.stockCode}</h2>
                <h4>{this.props.stockName}</h4>
                <button className="btn btn-danger"
                    onClick={this.handleRemoveStock.bind(this)}
                > Remove </button>
            </div>
        )
    }
}

export default StockBox;