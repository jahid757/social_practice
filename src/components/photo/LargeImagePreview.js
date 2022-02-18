import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#render");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
  },
};

const LargeImagePreview = ({ openModal, closeModal, largeImg }) => {
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="closeBtn" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <img
          className="largeImage"
          src={largeImg}
          alt="LargeImage"
        />
      </Modal>
    </div>
  );
};

export default LargeImagePreview;
