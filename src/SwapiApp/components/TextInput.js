import React from "react";
import classNames from "classnames";
export default ({ label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="password"
        className={classNames("form-control  form-control-lg", {
          "is-invalid": error
        })}
        {...rest}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};
