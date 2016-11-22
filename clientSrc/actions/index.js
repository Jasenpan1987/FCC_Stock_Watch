import axios from 'axios';

const API_ROOT = `/api`;

export function fetchStocks(company, startdate, enddate){
    const url = `${API_ROOT}?company=${company}&startdate=${startdate}&enddate=${enddate}`;
    console.log('action creator -> url: '+ url);

    return function(dispatch){
        axios.get(url).then(response => {
            console.log('action->response: ', response)
            dispatch({
                type: 'ADD_STOCK',
                payload: response.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: 'ADD_STOCK_ERROR',
                payload: err
            })
        })
    }
}

export function removeStock(dataset_code){
    return {
        type: 'REMOVE_STOCK',
        payload: dataset_code
    }
}