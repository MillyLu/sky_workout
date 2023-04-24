import s from "./Login.module.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";

export const LogIn = ({ setSignUp, setActive }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [mailError, setMailError] = useState("");
  const [passError, setPassError] = useState("");

  const dispatch = useDispatch();

  const auth = getAuth();

  const toogleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, mail, pass);
      const accessToken = await userData.user.accessToken;
      const email = await userData.user.email;
      const uid = await userData.user.uid;
      dispatch(
        setUser({
          email: email,
          id: uid,
          token: accessToken,
          password: pass,
        })
      );
      setActive(false);
    } catch (error) {
      setMailError("");
      setPassError("");
      const errorCode = error.code;

      if (errorCode === "auth/invalid-email") {
        setMail("");
        setMailError("Не правильный e-mail");
        return;
      }

      if (errorCode === "auth/wrong-password") {
        setPass("");
        setPassError("Не правильный пароль");
        return;
      }
    }
  };

  return (
    <div className={s.login}>
      <Logo alt="logo" />
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
        <input
          className={`${s.input} ${s.input_password} ${s.error}`}
          type="password"
          value=""
        />
      ) : (
        <input
          className={`${s.input} ${s.input_password}`}
          type="password"
          value={pass}
          placeholder={passError ? passError : "Пароль"}
          onChange={(e) => setPass(e.target.value)}
        />
      )}
      <button className={s.button_login} onClick={() => toogleLogin()}>
        Войти
      </button>
      <button className={s.button_registration} onClick={() => setSignUp(true)}>
        Зарегистрироваться
      </button>
    </div>
  );
};
