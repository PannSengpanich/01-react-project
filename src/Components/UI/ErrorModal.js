import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  const onCloseErrorModal = () => {
    props.closeErrorModal();
  };
  function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  }
  function Modal(props) {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onCloseErrorModal}></Backdrop>,
        document.querySelector("#backdrop"),
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={onCloseErrorModal}
        ></Modal>,
        document.querySelector("#modal"),
      )}
    </React.Fragment>
  );
}
export default ErrorModal;
