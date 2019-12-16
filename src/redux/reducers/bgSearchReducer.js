const bgSearchReducer = (state = '', action) => {
    switch (action.type) {
      case 'BG_RESULTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default bgSearchReducer;
  