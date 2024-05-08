import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Modal = ({ showModal, closeModal ,children }) => {
  const BackDrop = ({ show, close }) => {
    return (
      <div
        onClick={close}
        className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
      ></div>
    );
  };
  const OverLay = ({children, show }) => {
    return (
      <div
        className={`${styles.overLay} ${show ? styles.showOverLay : null}`}
      >
        {children}
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <BackDrop show={showModal} close={closeModal} />
          <OverLay show={showModal} >
          {children}
          </OverLay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
