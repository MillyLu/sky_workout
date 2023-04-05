import s from "./CourseType.module.css";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as One } from "../../img/1.svg";
import { ReactComponent as Two } from "../../img/2.svg";
import { ReactComponent as Three } from "../../img/3.svg";
import { ReactComponent as Phone } from "../../img/phone.svg";


export const Course = (props) => {
  return (
    <div className={s.course_description}>
      <Link to="/" className={s.logo}>
        <Logo alt="лого" />
      </Link>
      

      <div className={s.skill_card}>
        <NavLink to="/" className={s.skill_card_name}>
          {props.name}
        </NavLink>
      </div>
      <div>
        <h3 className={s.headlines}>Подойдет для вас, если:</h3>
        <div className={s.causes}>
          <div className={s.cause}>
            <One className={s.cause_number} />
            <p className={s.text}>{props.cause1}</p>
          </div>
          <div className={s.cause}>
            <Two className={s.cause_number} />
            <p className={s.text}>{props.cause2}</p>
          </div>
          <div className={s.cause}>
            <Three className={s.cause_number} />
            <p className={s.text}>{props.cause3}</p>
          </div>
        </div>
      </div>
      <div>   
        <h3 className={s.directions}>Направления:</h3>
        <div>
          <div className={s.list}>
            <div className={s.text}>
              <p>{props.directions1}</p>
              <p>{props.directions2}</p>
              <p>{props.directions3}</p>
            </div>
            <div className={s.text}>
              <p>{props.directions4}</p>
              <p>{props.directions5}</p>
              <p>{props.directions6}</p>
            </div>
          </div>
        </div>
      </div>
      <p className={s.description}>{props.text}</p>
      <div className={s.application}>
        <div className={s.application_top}>
          <p className={s.application_text}>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </p>
          <button className={s.application_button}>
            Записаться на тренировку
          </button>
        </div>
        <Phone className={s.phone_svg} />
        <div className=""></div>
      </div>
    </div>
  );
};
