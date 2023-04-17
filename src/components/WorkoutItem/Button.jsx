import s from "./WorkoutItem.module.css";

export const Button = (props) => {
  return (
    <button value={props.value} onClick={props.function} className={s.button}>
      {props.button}
    </button>
  );
};
