import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ user, component: Component, ...rest }) => {
  let isLogedIn = user && user.name;
  return <Route render={props => (isLogedIn ? <Component {...props} /> : <Redirect to="/login" />)} {...rest} />;
};

export default connect(
  store => {
    return {
      user: store.auth.user
    };
  },
  null
)(PrivateRoute);
