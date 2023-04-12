import s from "./Login.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/Slices/userSlice";

export const LogIn = ({ setSignUp }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const toogleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(()=>alert('Такого пользователя не существует'));
  };

  return (
    <div className={s.login}>
      <Logo alt="logo" />
      <input
        className={`${s.input} ${s.input_login}`}
        type="email"
        value={mail}
        placeholder="E-mail"
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        className={`${s.input} ${s.input_password}`}
        type="password"
        value={pass}
        placeholder="Пароль"
        onChange={(e) => setPass(e.target.value)}
      />
      <button className={s.button_login} onClick={() => toogleLogin()}>
        Войти
      </button>
      <button className={s.button_registration} onClick={() => setSignUp(true)}>
        Зарегистрироваться
      </button>
    </div>
  );
};
