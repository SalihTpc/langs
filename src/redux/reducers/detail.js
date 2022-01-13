const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
