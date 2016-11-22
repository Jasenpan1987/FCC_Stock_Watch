import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const colorTable = ['red', 'green', 'grey', 'yellow', 'AliceBlue', 'Brown', 'Cornsilk', 'Crimson ', 'Cyan',
    'DarkKhaki', 'DarkMagenta', 'Gold', 'HotPink', 'LawnGreen', 'LightSeaGreen', 'Lime', 'Olive', 'RebeccaPurple', 'Teal'
];


class StockChart extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <h2>Line Example</h2>

                <Line data={{
                labels: this.props.chartData.timeLine,
                datasets: this.props.chartData.chartData
                }} />

            </div>
        );
    }
}

function processChartData(stocks){
    var timeLine = [];
    var chartData = [];

    stocks.forEach((stock, index) => {
        var singleChartData = {
            label: stock.dataset_code,
            fill: false,
            lineTension: 0.1,
            backgroundColor: colorTable[index],
            borderColor: colorTable[index],
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colorTable[index],
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: colorTable[index],
            pointHoverBorderColor: colorTable[index],
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        };
        timeLine = [];
        stock.stockData.forEach(stockAtTime => {
            singleChartData.data.push(stockAtTime.price);
            timeLine.push(stockAtTime.date);
        });
        chartData.push(singleChartData);
    });



    return {
        timeLine: timeLine,
        chartData: chartData
    }

}

function mapStateToProps(state){
    return {
        chartData: processChartData(state.stocks)
    }
}

export default connect(mapStateToProps)(StockChart);