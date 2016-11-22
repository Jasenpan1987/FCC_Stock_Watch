export default function(state = [], action){
    switch(action.type){
        case 'ADD_STOCK':
            return [action.payload, ...state];
        case 'REMOVE_STOCK':
            return state.filter(stock => {
                return stock.dataset_code != action.payload;
            });
        default:
            return state;
    }
}