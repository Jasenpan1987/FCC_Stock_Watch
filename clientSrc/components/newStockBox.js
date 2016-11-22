import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchStocks } from '../actions';

class AddStock extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            stockCode: ''
        }
    }

    handleStartChange(event){
        this.setState({
            startDate: event.target.value
        });
    }

    handleEndChange(event){
        this.setState({
            endDate: event.target.value
        });
    }

    handleStockCodeChange(event){
        this.setState({
            stockCode: event.target.value
        });
    }

    handleAdd(){
        console.log('handleAdd clicked', this.state);
        console.log(this.props.fetchStocks)
        this.props.fetchStocks(this.state.stockCode, this.state.startDate, this.state.endDate);
    }
    render(){
        return (
            <div className="col-md-12">
                <h3>Add a new stock:</h3>
                <label htmlFor="startDate">Start Date</label>
                <input type="date"
                       id="startDate"
                       name="startDate"
                       onChange={this.handleStartChange.bind(this)}
                />

                <label htmlFor="startDate">End Date</label>
                <input type="date"
                       id="endDate"
                       name="endDate"
                       onChange={this.handleEndChange.bind(this)}
                />
                <label htmlFor="stockCode">Stock Code</label>
                <input type="text"
                       id="stockCode"
                       onChange={this.handleStockCodeChange.bind(this)}
                />
                <span> </span>
                <button className="btn btn-sm btn-primary"
                        onClick={this.handleAdd.bind(this)}
                >Add</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchStocks
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddStock);