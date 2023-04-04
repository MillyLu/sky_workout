import s from "./Login.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div className={s.login}>
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
      <button className={s.button_login}>Войти</button>
      <Link to="/signup" className={s.button_registration}>
        Зарегистрироваться
      </Link>
      {/* <button className={s.button_registration}>Зарегистрироваться</button> */}
    </div>
  );
};
