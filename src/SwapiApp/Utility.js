import axios from "axios";
import { ADD_USER, USER_LOADING } from "./ActionConstant";

export const nativeFetch = ({ method, url, data }) => {
  return axios({
    method: method || "get",
    url,
    baseURL: "https://swapi.co/api/"
  })
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      alert(`Error :: ${err}`);
    });
};

export const sortArray = (array = []) => {
  return array
    .map(item => {
      if (item.population == "unknown") {
        item = { ...item, population: null };
      }
      return item;
    })
    .sort((a, b) => {
      return Number(a.population) < Number(b.population);
    });
};

export const authUser = store => {
  //extract user form loacal storage:
  let user_name = window.localStorage.getItem("user_name");
  if (user_name) {
    //get user from api ;
    nativeFetch({ url: `people/?search=${user_name}` })
      .then(({ results } = {}) => {
        let user = results && results[0];
        if (user) {
          store.dispatch({
            type: ADD_USER,
            payload: user
          });
        }
        store.dispatch({ type: USER_LOADING, payload: false });
      })
      .catch(err => {
        alert(err);
      });
  } else {
    store.dispatch({ type: USER_LOADING, payload: false });
  }
};

export const avatarText = string => {
  if (!string) return;
  let [word1, word2] = string.split(" ");
  let avatarText = word1.split("")[0].toLocaleUpperCase();
  if (word2) {
    avatarText = avatarText + word2.split("")[0].toLocaleUpperCase();
  }
  return avatarText;
};
