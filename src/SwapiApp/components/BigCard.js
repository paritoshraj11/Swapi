import React from "react";

export default ({ name, diameter, climate, gravity, population, ...rest }) => {
  return (
    <div className="col-md-12 my-2">
      <div className="card border-light ">
        <div className="card-header">{name}</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div>
                <span className="card-title font-weight-bold mr-2">Diameter :</span>
                <span className="card-text">{diameter}</span>
              </div>
              <div>
                <span className="card-title font-weight-bold mr-2">climate :</span>
                <span className="card-text">{climate}</span>
              </div>
              <div>
                <span className="card-title font-weight-bold mr-2">gravity :</span>
                <span className="card-text">{gravity}</span>
              </div>
              <div>
                <span className="card-title font-weight-bold mr-2">population :</span>
                <span className="card-text">{population || "unknown"}</span>
              </div>
            </div>
            <div className="col-md-6">
              <img class="img-thumbnail" src="https://pngimg.com/uploads/crowd/crowd_PNG22.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
