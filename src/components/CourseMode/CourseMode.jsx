import s from "./CourseMode.module.css";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as One } from "../../assets/img/1.svg";
import { ReactComponent as Two } from "../../assets/img/2.svg";
import { ReactComponent as Three } from "../../assets/img/3.svg";
import { ReactComponent as Phone } from "../../assets/img/phone.svg";
import Yoga from "../../assets/img/skill_card_yoga.jpg";
import Bodyflex from "../../assets/img/skill_card_bodyflex.jpg";
import Step from "../../assets/img/skill_card_stepaerobics.jpg";
import Stretching from "../../assets/img/skill_card_stretching.jpg";
import Dance from "../../assets/img/skill_card_dancefitness.jpg";
import { useAddCourseToUserMutation } from "../../services/courses";
import { useGetCourseByIdQuery } from "../../services/courses";
import { useSelector } from "react-redux";
import { getUserId } from "../../hooks/user-auth";

export const CourseMode = ({ id }) => {
  const [error, setError] = useState(false);
  const [addWorkout, setAddWorkout] = useState(false);
  const [addCourse] = useAddCourseToUserMutation();
  const { data: course } = useGetCourseByIdQuery(id.id);
  const userId = useSelector(getUserId);

  const onHandleClick = useCallback(() => {
    if (!userId) {
      setError(true);
      return;
    }
    addCourse({
      id: userId,
      courseId: id.id,
    });
    setAddWorkout(true);
  }, [userId, addCourse, id.id ]);

  return (
    <div className={s.course_description}>
      <Link to="/" className={s.logo}>
        <Logo alt="лого" />
      </Link>
      <div
        className={
          course?.name === "Йога"
            ? s.skill_card_yoga
            : course?.name === "Бодифлекс"
            ? s.skill_card_bodyflex
            : course?.name === "Стретчинг"
            ? s.skill_card_stretching
            : course?.name === "Танцевальный фитнес"
            ? s.skill_card_dancefitness
            : s.skill_card_stepaerobics
        }>
        <h1
          to="/"
          className={s.skill_card_name}
          url={
            course?.name === "Йога"
              ? Yoga
              : course?.name === "Бодифлекс"
              ? Bodyflex
              : course?.name === "Стретчинг"
              ? Stretching
              : course?.name === "Танцевальный фитнес"
              ? Dance
              : Step
          }>
          {course?.name}
        </h1>
      </div>

      <div>
        <h3 className={s.headlines}>Подойдет для вас, если:</h3>
        <div className={s.causes}>
          <div className={s.cause}>
            <One className={s.cause_number} />
            <p className={s.text}>{course?.cause[0]}</p>
          </div>
          <div className={s.cause}>
            <Two className={s.cause_number} />
            <p className={s.text}>{course?.cause[1]}</p>
          </div>
          <div className={s.cause}>
            <Three className={s.cause_number} />
            <p className={s.text}>{course?.cause[2]}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={s.directions}>Направления:</h3>
        <div>
          <div className={s.textDirections}>
            {course?.directions &&
              course?.directions.map((item) => <p key={item}>• {item}</p>)}
          </div>
        </div>
      </div>
      <p className={s.description}>
        {course?.definition}
        <br />
        {course?.description}
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
