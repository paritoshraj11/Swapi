import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ErrorReducers from "./ErrorReducers";
import PlanetReducers from "./PlanetReducers";

export default combineReducers({
  auth: AuthReducer,
  error: ErrorReducers,
  planets: PlanetReducers
});
