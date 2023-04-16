import s from "./SignUp.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/Slices/userSlice";
import { useAddUserMutation } from "../../services/courses";


export const SignUp = ({setActive}) => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState("");
  const [mailError, setMailError] = useState("");
  const [passError, setPassError] = useState("");

  const dispatch = useDispatch();
  const [addUser] = useAddUserMutation();


  const auth = getAuth();

  const toggleSignUp = async () => {
    if (pass !== repeatPass) {
      setError("Ошибка");
      setPass("");
      setRepeatPass("");
      return;
    }
    try {
      const userData = await createUserWithEmailAndPassword(auth, mail, pass);
      const accessToken = await userData.user.accessToken;
      const email = await userData.user.email;
      const uid = await userData.user.uid;
      dispatch(
        setUser({
          email: email,
          id: uid,
          token: accessToken,
        })
      );
      addUser({
        id: uid,
        username: login
      })
      setActive(false);
    } catch (error) {
      setMailError("");
      setPassError("");
      const errorCode = error.code;

      if (errorCode === "auth/invalid-email") {
        setMail("");
        setMailError("Не правильный e-mail или отсутствует");
        return;
      }

      if (errorCode === "weak-password") {
        setPassError("Минимум 6 символов");
        return;
      }
    }
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
        className={
          mailError
            ? `${s.input} ${s.input_login} ${s.error}`
            : `${s.input} ${s.input_login}`
        }
        type="email"
        value={mail}
        placeholder={mailError ? mailError : "E-mail"}
        onChange={(e) => setMail(e.target.value)}
      />
      {passError ? (
        setPass("")
      ) : (
        <input
          className={
            passError
              ? `${s.input} ${s.input_password} ${s.error}`
              : `${s.input} ${s.input_password}`
          }
          type="password"
          value={pass}
          placeholder={passError ? { passError } : "Пароль"}
          onChange={(e) => setPass(e.target.value)}
        />
      )}

      <input
        className={
          error
            ? `${s.input} ${s.input_password} ${s.error}`
            : `${s.input} ${s.input_password}`
        }
        type="password"
        value={repeatPass}
        placeholder={error ? "Пароли не совпадают!" : "Повторите пароль"}
        onChange={(e) => setRepeatPass(e.target.value)}
      />
      <button className={s.button_registration} onClick={toggleSignUp}>
        Зарегистрироваться
      </button>
    </div>
  );
};
