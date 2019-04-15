import { ADD_USER, USER_LOADING } from "../ActionConstant";
export default (
  state = {
    user: {},
    loading: true
  },
  action
) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload };
    case USER_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
