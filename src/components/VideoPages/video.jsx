import s from "./video.module.css";
import ReactPlayer from "react-player/youtube";
import { Header } from "../../components/ProfileHeader/profileHeader";
import { useState } from "react";
import { ProgressForm } from "../../components/progressForm/ProgressForm"

const ProgressBar = ({ progress }) => {
  return (
    <div className={s.bar}>
      <div className={s.barStyle} style={{ width: progress * 2.78 }}>
        {progress}%
      </div>
    </div>
  );
};



export const Video = ( props ) => {
  const [isProgressClick, setIsProgressClick] = useState(false);
  const tasks = [
    'Наклон вперед (10 повторений)',
    'Наклон назад (10 повторений)',
    'Поднятие ног, согнутых в коленях (5 повторений)',
    'Поднятие ног, согнутых в коленях (5 повторений)',
    'Поднятие ног, согнутых в коленях (5 повторений)',
    'Поднятие ног, согнутых в коленях (5 повторений)',
  ];

  return (
    
    <div className={s.lessons}>
      <Header />
      <div className={s.title}>
        <div>
          <p className={s.yoga}>{props.name}</p>
          <p className={s.description}>{props.description}</p>
        </div>
 
        <div>
          <div className={s.video}>
            <ReactPlayer
              className="react-player"
              url={props.url}
              width="1160px"
              height="639px"
            />
          </div>
        </div>
        <div className={s.about}>
          <div className={s.exercises}>
            <h2>Упражнения</h2>
            {props.exercises1 ? <p>{props.exercises1}</p> : null}
            {props.exercises2 ? <p>{props.exercises2}</p> : null}
            {props.exercises3 ? <p>{props.exercises3}</p> : null}
            {props.exercises4 ? <p>{props.exercises4}</p> : null}
            {props.exercises5 ? <p>{props.exercises5}</p> : null}

            <button className={s.exercises_button} onClick={() => setIsProgressClick(true)}>
              Заполнить свой прогресс
            </button>
            {isProgressClick && (
            <ProgressForm
            onClick={() => setTimeout(() => setIsProgressClick(false), 2000)}
            tasks={tasks }
            />
            )}
          </div>
          <div className={s.progress}>
            <h2>Мой прогресс по тренировке {props.day}:</h2>
            {props.progress1 ? (
              <div className={s.progress_bar}>
                <p className={s.progress_info}>{props.progress1}</p>
                <ProgressBar progress={45} title="Completed" />
              </div>
            ) : null}
            {props.progress2 ? (
              <div className={s.progress_bar}>
                <p className={s.progress_info}>{props.progress2}</p>
                <ProgressBar progress={45} title="Completed" />
              </div>
            ) : null}
            {props.progress3 ? (
              <div className={s.progress_bar}>
                <p className={s.progress_info}>{props.progress3}</p>
                <ProgressBar progress={45} title="Completed" />
              </div>
            ) : null}
            {props.progress4 ? (
              <div className={s.progress_bar}>
                <p className={s.progress_info}>{props.progress4}</p>
                <ProgressBar progress={45} title="Completed" />
              </div>
            ) : null}
            {props.progress5 ? (
              <div className={s.progress_bar}>
                <p className={s.progress_info}>{props.progress5}</p>
                <ProgressBar progress={45} title="Completed" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
