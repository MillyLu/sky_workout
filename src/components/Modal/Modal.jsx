import React from "react";
import s from "./Modal.module.css";

export const Modal = ({ active, setActive, setSignUp, children }) => {
  const toggle = () => {
    setActive(false);
    setSignUp(false);
  };

  return (
    <div
      className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
      onClick={() => toggle()}
    >
      <div
        className={
          active ? `${s.modal_content} ${s.active}` : `${s.modal_content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
