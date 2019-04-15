import React from "react";
import { Modal, Button } from "react-bootstrap";

export default ({
  name = "",
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  population,
  terrain,
  surface_water,
  url,
  show,
  onHide,
  ...rest
}) => {
  return (
    <Modal show={show} onHide={onHide} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-danger">
          {name.toLocaleUpperCase()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span className="mr-2">Rotation Period :</span> {rotation_period}
        </p>
        <p>
          <span className="mr-2">Orbital Period :</span> {orbital_period}
        </p>
        <p>
          <span className="mr-2"> Diameter:</span> {diameter}
        </p>
        <p>
          <span className="mr-2">Gravity:</span> {gravity}
        </p>
        <p>
          <span className="mr-2">Terrain:</span> {terrain}
        </p>
        <p>
          <span className="mr-2">Surface Water:</span> {surface_water}
        </p>
        <p>
          <span className="mr-2">Population: </span>
          {population}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
