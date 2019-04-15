import React from "react";
import { TextInput } from "../components";

class Authenticate extends React.Component {
  state = {
    error: {}
  };

  componentWillMount() {
    this._authenticateRoute();
  }

  componentDidUpdate() {
    this._authenticateRoute();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (Object.keys(nextProps.error).length) {
  //     this.setState({
  //       error: { ...this.state.error, ...nextProps.error }
  //     });
  //   }
  // }

  _authenticateRoute = () => {
    //if user exists then redirect to the root route of application
    let { user, history } = this.props;
    if (user && user.name) {
      history.push("/");
    }
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: { ...this.state.error, [e.target.name]: "" }
    });
  };

  _isEmptyField = () => {
    let { userName, password } = this.state;
    let error = undefined;
    if (!userName) {
      error = { ...error, userName: "user name required" };
    }
    if (!password) {
      error = { ...error, password: "password required" };
    }
    if (error) {
      this.setState({ error: { ...error } });
      return true;
    }
  };

  _onSubmit = e => {
    e.preventDefault();
    let { authenticateUser, history } = this.props;
    let { userName, password } = this.state;

    //empty field validation
    if (this._isEmptyField()) {
      return;
    }

    authenticateUser &&
      authenticateUser(
        {
          userName,
          password
        },
        history
      );
  };
  render() {
    let { state: { userName, password, error } = {}, _onChange, _onSubmit } = this;
    return (
      <form className="form" role="form" autocomplete="off" id="formLogin" onSubmit={_onSubmit}>
        <TextInput
          label="User Name"
          type="text"
          name="userName"
          value={userName}
          onChange={_onChange}
          error={error.userName}
        />
        <TextInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={_onChange}
          error={error.password}
        />
        <button type="submit" classNameName="btn btn-success btn-lg float-right" id="btnLogin">
          Login
        </button>
      </form>
    );
  }
}

export default Authenticate;
