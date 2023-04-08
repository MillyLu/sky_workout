import s from "./Login.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";

export const LogIn = ({ signUp, setSignUp, user, toogleLogin }) => {

  return (
    <div className={s.login}>
      <Logo alt="logo" />
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
      <button className={s.button_login} onClick={() => toogleLogin()}>
        {user ? "Выйти" : "Войти"}
      </button>
      <button className={s.button_registration} onClick={() => setSignUp(true)}>
        Зарегистрироваться
      </button>
    </div>
  );
};
