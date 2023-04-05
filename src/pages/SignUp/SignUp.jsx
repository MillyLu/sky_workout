import s from "./SignUp.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";

export const SignUp = () => {
  return (
    <div className={s.sign_up}>
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
      <input
        className={`${s.input} ${s.input_password}`}
        type="password"
        placeholder="Повторите пароль"
      />
      <button className={s.button_registration}>Зарегистрироваться</button>
    </div>
  );
};
