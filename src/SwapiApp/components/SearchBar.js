import React from "react";

export default ({ value, onChange, ...rest }) => {
  return (
    <div className="form-group has-search">
      <input type="text" className="form-control" placeholder="Search" onChange={onChange} value={value} />
    </div>
  );
};
