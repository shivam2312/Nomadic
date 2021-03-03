import React, { useContext, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Buttons from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./PlaceItem.css";
import { AuthContext } from "../../shared/context/auth-context";
import Map from "../../shared/components/UIElements/Map";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("confirm");
  };

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
          <Map center={props.coordinate} zoom={16} />
        </div>
      </Modal>
      <Modal
        header="Are you sure?"
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Buttons inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Buttons>
            <Buttons danger onClick={confirmDeleteHandler}>
              DELETE
            </Buttons>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note at any point
          it can't be changed thereafter.
        </p>
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
            <Buttons inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Buttons>
            {auth.isLoggedIn && (
              <Buttons to={`/places/${props.id}`}>EDIT</Buttons>
            )}
            {auth.isLoggedIn && (
              <Buttons danger onClick={showDeleteWarningHandler}>
                DELETE
              </Buttons>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
