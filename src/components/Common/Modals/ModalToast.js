import React from "react";
import { Modal } from "react-bootstrap";

const ModalToast = ({ show, handleClose, text, type }) => {
  return (
    <div data-cy="modal-information">
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-toast"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body onClick={handleClose} >
          <div data-cy="modal-information-icon" className={type === "success" ? "icon-alert-sm" : "icon-danger-sm"}></div>
          <p data-cy="modal-information-title" className="pl-3 pr-3">{text}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalToast;
