import { ADD_USER } from "../ActionConstant";
import { nativeFetch } from "../Utility";

const authenticateUser = (data = {}, history) => dispatch => {
  nativeFetch({ url: `people/?search=${data.userName}` }).then(({ results }) => {
    let user = results.length ? results[0] : null;
    if (user && user.name.toLowerCase() == data.userName.toLowerCase() && user.birth_year == data.password) {
      dispatch &&
        dispatch({
          type: ADD_USER,
          payload: user
        });
      persistUser({ user });
      history && history.push("/");
    } else {
      alert(`user name or password is wrong`);
    }
  });
};

export const logOut = ({ data, history }) => dispatch => {
  persistUser({ user: {} });
  dispatch({
    type: ADD_USER,
    payload: {}
  });
  history && history.push("/login");
};

const persistUser = ({ user = {} }) => {
  let { name } = user;
  //persist user to the local storage using there name property
  window.localStorage.setItem("user_name", name);
};

export { authenticateUser };
