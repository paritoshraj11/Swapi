import { ADD_ERROR } from "../ActionConstant";
export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ERROR:
      console.log(">>> action", action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
