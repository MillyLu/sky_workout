import s from "./SignUp.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/Slices/userSlice";

export const SignUp = () => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const toggleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };
  return (
    <div className={s.sign_up}>
      <Logo alt="logo" />
      <input
        className={`${s.input} ${s.input_login}`}
        type="text"
        value={login}
        placeholder="Логин"
        onChange={(e) => setLogin(e.target.value)}
      />
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
      <input
        className={`${s.input} ${s.input_password}`}
        type="password"
        placeholder="Повторите пароль"
      />
      <button className={s.button_registration} onClick={() => toggleSignUp()}>
        Зарегистрироваться
      </button>
    </div>
  );
};
