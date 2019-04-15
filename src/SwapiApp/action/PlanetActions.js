import { nativeFetch } from "../Utility";
import { PLANET_LOADING, ADD_PLANETS } from "../ActionConstant";

export const getPlanets = data => dispatch => {
  let url = `planets/`;
  setPlanets({ dispatch, url });
};

export const serchPlanets = ({ data }) => dispatch => {
  let url = `planets/?search=${data}`;
  setPlanets({ dispatch, url });
};

const setPlanets = ({ dispatch, url }) => {
  dispatch({
    type: PLANET_LOADING,
    payload: true
  });
  nativeFetch({ url }).then(({ results, next } = {}) => {
    dispatch({
      type: ADD_PLANETS,
      payload: { data: results, next }
    });
    dispatch({
      type: PLANET_LOADING,
      payload: false
    });
  });
};
