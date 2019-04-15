import React from "react";
import Authenticate from "./Authenticate";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authenticateUser } from "../action";

const AuthenticateContainer = props => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card rounded-0">
                <div className="card-header">
                  <h3 className="mb-0">Login</h3>
                </div>
                <div className="card-body">
                  <Authenticate {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  store => {
    return {
      user: store.auth.user,
      error: store.error
    };
  },
  {
    authenticateUser
  }
)(withRouter(AuthenticateContainer));
