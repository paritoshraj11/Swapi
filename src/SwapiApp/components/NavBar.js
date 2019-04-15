import React from "react";
import { logOut } from "../action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { avatarText } from "../Utility";
import { avatarStyle } from "../style";

const NavBar = ({ user, logOut, history, ...rest }) => {
  //checking user excistance using name property
  let { name } = user;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        SWAPI
      </a>
      {name && (
        <div className="navbar-nav ml-auto d-flex" style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ ...avatarStyle }}>{avatarText(name)}</div>
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => {
              logOut({ history });
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default connect(
  store => {
    return {
      user: store.auth.user
    };
  },
  {
    logOut
  }
)(withRouter(NavBar));
