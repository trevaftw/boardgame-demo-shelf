const fetchResultsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
};

export default fetchResultsReducer;
