const initialState = {
    likeCount: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          likeCount: state.likeCount + 1
        };
      case 'DECREMENT':
        return {
          ...state,
          likeCount: state.likeCount - 1
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  