const myEmailReducer = (state = null, action) => {
  switch (action.type) {
    case "MOUNT":
      return action.payload;
    case "DISMOUNT":
      return null;
    default:
      return state;
  }
};

export default myEmailReducer;
