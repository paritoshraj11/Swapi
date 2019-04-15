import { ADD_PLANETS, PLANET_LOADING, LOAD_MORE } from "../ActionConstant";
import store from "../store";
export default (
  state = {
    data: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    case PLANET_LOADING:
      return { ...state, loading: action.payload };
    case ADD_PLANETS:
      return { ...store, data: action.payload.data, next: action.payload.next };
    case LOAD_MORE:
      return { ...store, data: [...store.data, ...action.payload.data] };
    default:
      return state;
  }
};
