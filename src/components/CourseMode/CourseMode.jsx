import s from "./CourseMode.module.css";
import { useCallback, useState } from "react";
import { ReactComponent as Phone } from "../../assets/img/phone.svg";
import Yoga from "../../assets/img/skill_card_yoga.jpg";
import Bodyflex from "../../assets/img/skill_card_bodyflex.jpg";
import Step from "../../assets/img/skill_card_stepaerobics.jpg";
import Stretching from "../../assets/img/skill_card_stretching.jpg";
import Dance from "../../assets/img/skill_card_dancefitness.jpg";
import { Header } from "../ProfileHeader/ProfileHeader";
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

  const pic = [ s.cause_number_one,  s.cause_number_two, s.cause_number_three ];

  const name = {
    'Йога': s.skill_card_yoga,
    'Бодифлекс': s.skill_card_bodyflex,
    'Стретчинг': s.skill_card_stretching,
    'Танцевальный фитнес ': s.skill_card_dancefitness,
    'Степ-аэробика': s.skill_card_stepaerobics,
  }

  const fon = {
    'Йога': Yoga,
    'Бодифлекс': Bodyflex,
    'Стретчинг': Stretching,
    'Танцевальный фитнес': Dance,
    'Степ-аэробика': Step,
  }

  console.log(course);

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
      <Header />
      <div
        className={name[course?.name]}>
        <h1
          to="/"
          className={s.skill_card_name}
          url={fon[course?.name]
            
          }>
          {course?.name}
        </h1>
      </div>

      <div>
        <h3 className={s.headlines}>Подойдет для вас, если:</h3>
        <div className={s.causes}>
          {course?.cause.map((item, index) => {
            const back = pic[index];
            return(
             <div key={index} className={s.cause}>
             <div className={`${back}`} />
             <p className={s.text}>{item}</p>
           </div>
          )})}
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
