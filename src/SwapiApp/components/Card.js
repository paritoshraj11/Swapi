import React from "react";

export default ({ name, diameter, climate, gravity, population, headerStyle, ...rest }) => {
  return (
    <div className="col-md-6 my-2">
      <div className="card border-light  shadow">
        <div className="card-header" style={{ ...headerStyle }}>
          {name}
        </div>
        <div className="card-body">
          <div>
            <span className="card-title font-weight-bold mr-2">Diameter :</span>
            <span className="card-text">{diameter || "unknown"}</span>
          </div>
          <div>
            <span className="card-title font-weight-bold mr-2">climate :</span>
            <span className="card-text">{climate || "unknown"}</span>
          </div>
          <div>
            <span className="card-title font-weight-bold mr-2">gravity :</span>
            <span className="card-text">{gravity || "unknown"}</span>
          </div>
          <div>
            <span className="card-title font-weight-bold mr-2">population :</span>
            <span className="card-text">{population || "unknown"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/*


return (
    <div className="card mb-3">
      <div className="card-body">
        <div class="card-header">Header</div>
        <h5 className="card-title">Card title that wraps to a new line</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in to additional content. This content is a
          little bit longer.
        </p>
      </div>
    </div>
  );

*/
