import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Authenticate, PlanetSearch } from "./screen";
import { Provider, connect } from "react-redux";
import { NavBar, PrivateRoute, LoadingIndicator } from "./components";
import { authUser } from "./Utility";
import store from "./store";

authUser(store);

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <App>
          <NavBar />
          <Route exact path="/login" component={Authenticate} />
          <PrivateRoute exact path="/" component={PlanetSearch} />
        </App>
      </Router>
    </Provider>
  );
};

const AppContainer = ({ loading, children }) => {
  return loading ? <LoadingIndicator /> : children;
};

const App = connect(store => {
  return {
    loading: store.auth.loading
  };
})(AppContainer);
