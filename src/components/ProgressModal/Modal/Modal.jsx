import classes from "./Modal.module.css";
import Portal from "./Portal/Portal";

const Modal = ({ children, onClick }) => {
  return (
    <Portal>
      <div className={classes.wrapper}>
        <div className={classes.modal}>{children}</div>
        <div className={classes.close} onClick={onClick} />
      </div>
    </Portal>
  );
};

export default Modal;
