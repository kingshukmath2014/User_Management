const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        data: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
