import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Buttons from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, settShowMap] = useState(false);
  const openMapHandler = (props) => settShowMap(true);
  const closeMapHandler = (props) => settShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Buttons onClick={closeMapHandler}>CLOSE</Buttons>}
      >
        <div className="map-container">
            <h2>THE MAP!</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Buttons inverse onClick={openMapHandler}>VIEW ON MAP</Buttons>
            <Buttons to={`/places/${props.id}`}>EDIT</Buttons>
            <Buttons danger>DELETE</Buttons>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
