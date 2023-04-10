import s from "./Error.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import Smile from "./img/smile_crying.png";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className={s.error_page}>
      <div className={s.error}>
        <Link to="/">
          <Logo alt="logo" />
        </Link>
        <img className={s.img} src={Smile} alt="crying" />
        <p className={s.title}>404</p>
        <p className={s.sub_title}>Страница не найдена</p>
        <p className={s.info}>
          Возможно, она была удалена или перенесена на другой адрес
        </p>
        <Link className={s.button} to="/">
          Главная
        </Link>
      </div>
    </div>
  );
};
