import s from "./WorkoutItem.module.css";

export const WorkoutItem = (props) => {
  return (
    <div className={s.item}>
      <img className={s.img} src={props.img} alt="img" />
      <p className={s.title}>{props.name}</p>
      {props.button}
    </div>
  );
};
