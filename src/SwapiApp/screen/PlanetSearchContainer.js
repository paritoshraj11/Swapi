import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlanetSearch from "./PlanetSearch";
import { getPlanets, serchPlanets } from "../action";

const PlanetSearchContainer = props => {
  return <PlanetSearch {...props} />;
};

export default connect(
  store => {
    return {
      data: store.planets
    };
  },
  { getPlanets, serchPlanets }
)(withRouter(PlanetSearchContainer));
