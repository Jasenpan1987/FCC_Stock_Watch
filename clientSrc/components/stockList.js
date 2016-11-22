import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeStock } from '../actions';

import StockBox from './stockBox';


class StockList extends Component {
    constructor(props){
        super(props);
    }

    handleBoxClick(stock_code){
        this.props.removeStock(stock_code)
        console.log('hello world: '+stock_code);
    }

    renderStockBlock(){
        return this.props.stocks.map(stock => {
            return (
                <StockBox
                    stockCode = { stock.dataset_code }
                    stockName = { stock.name }
                    key={ stock.dataset_code}
                    removeStock = { this.handleBoxClick.bind(this) }
                />
            )
        })
    }

    render(){
        return (
            <div>
                <h2>Stock List</h2>
                <div className="row">
                    {this.renderStockBlock()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        stocks: state.stocks
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        removeStock
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);

