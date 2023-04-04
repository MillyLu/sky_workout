import s from "./SignUp.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className={s.sign_page}>
      <div className={s.sign_up}>
        <Link to="/">
          <Logo alt="logo" />
        </Link>
        <input
          className={`${s.input} ${s.input_login}`}
          type="text"
          placeholder="Логин"
        />
        <input
          className={`${s.input} ${s.input_password}`}
          type="password"
          placeholder="Пароль"
        />
        <input
          className={`${s.input} ${s.input_password}`}
          type="password"
          placeholder="Повторите пароль"
        />
        <button className={s.button_registration}>Зарегистрироваться</button>
      </div>
    </div>
  );
};
