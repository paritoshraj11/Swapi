import React, { useState } from "react";
import PlanetDetail from "./PlanetDetail";

export default class Card extends React.Component {
  state = {
    show: false
  };
  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    let { name, diameter, climate, gravity, population, headerStyle, ...rest } = this.props;
    return [
      <PlanetDetail show={this.state.show} onHide={this.toggleModal} {...this.props} />,
      <div className="col-md-6 my-2" onClick={this.toggleModal} onHide={this.toggleModal}>
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
    ];
  }
}
