import s from "./CourseMode.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as One } from "./img/1.svg";
import { ReactComponent as Two } from "./img/2.svg";
import { ReactComponent as Three } from "./img/3.svg";
import { ReactComponent as Phone } from "./img/phone.svg";
import Yoga from "./img/skill_card_yoga.jpg";
import Bodyflex from "./img/skill_card_bodyflex.jpg";
import Step from "./img/skill_card_stepaerobics.jpg";
import Stretching from "./img/skill_card_stretching.jpg";
import Dance from "./img/skill_card_dancefitness.jpg";
import { useAddCourseToUserMutation } from "./services/courses";
import { useGetCourseByIdQuery } from "./services/courses";
import { useSelector } from "react-redux";
import { getUserId } from "./Hooks/user-auth";

export const CourseMode = ({ id }) => {
  const [error, setError] = useState(false);
  const [addWorkout, setAddWorkout] = useState(false);
  const [addCourse] = useAddCourseToUserMutation();
  const { data } = useGetCourseByIdQuery(id.id);
  const userId = useSelector(getUserId);

  function onHandleClick() {
    if (!userId) {
      setError(true);
      return;
    }
    addCourse({
      id: userId,
      courseId: id.id,
    });
    setAddWorkout(true);
  }

  return (
    <div className={s.course_description}>
      <Link to="/" className={s.logo}>
        <Logo alt="лого" />
      </Link>
      <div
        className={
          data?.name === "Йога"
            ? s.skill_card_yoga
            : data?.name === "Бодифлекс"
            ? s.skill_card_bodyflex
            : data?.name === "Стретчинг"
            ? s.skill_card_stretching
            : data?.name === "Танцевальный фитнес"
            ? s.skill_card_dancefitness
            : s.skill_card_stepaerobics
        }>
        <h1
          to="/"
          className={s.skill_card_name}
          url={
            data?.name === "Йога"
              ? Yoga
              : data?.name === "Бодифлекс"
              ? Bodyflex
              : data?.name === "Стретчинг"
              ? Stretching
              : data?.name === "Танцевальный фитнес"
              ? Dance
              : Step
          }>
          {data?.name}
        </h1>
      </div>

      <div>
        <h3 className={s.headlines}>Подойдет для вас, если:</h3>
        <div className={s.causes}>
          <div className={s.cause}>
            <One className={s.cause_number} />
            <p className={s.text}>{data?.cause[0]}</p>
          </div>
          <div className={s.cause}>
            <Two className={s.cause_number} />
            <p className={s.text}>{data?.cause[1]}</p>
          </div>
          <div className={s.cause}>
            <Three className={s.cause_number} />
            <p className={s.text}>{data?.cause[2]}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={s.directions}>Направления:</h3>
        <div>
          <div className={s.textDirections}>
            {data?.directions &&
              data?.directions.map((item) => <p key={item}>• {item}</p>)}
          </div>
        </div>
      </div>
      <p className={s.description}>
        {data?.definition}
        <br />
        {data?.description}
      </p>
      <div className={s.application}>
        <div className={s.application_top}>
          <p className={s.application_text}>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </p>
          {addWorkout ? (
            <div className={s.application_added}>Записан!</div>
          ) : (
            <button onClick={onHandleClick} className={s.application_button}>
              Записаться на тренировку
            </button>
          )}
          {error && (
            <p className={s.error}>
              Для записи на тренировку необходимо войти или зарегистрироваться!
            </p>
          )}
        </div>
        <Phone className={s.phone_svg} />
        <div className=""></div>
      </div>
    </div>
  );
};
