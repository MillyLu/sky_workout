import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, updatePassword } from "@firebase/auth";
import { setNewPass } from "../../store/slices/userSlice";
import styles from "./NewPassword.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

export function NewPassword({ setActive, setNPass }) {
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  function updatePass() {
    const auth = getAuth();

    const user = auth.currentUser;
    const newPassword = password;

    updatePassword(user, newPassword)
      .then(() => {
        dispatch(
          setNewPass({
            password: password,
          })
        );
        setNPass(password);
        setActive(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function onNewPassClick(e) {
    e.preventDefault();

    if (!password) {
      setError("Введите новый пароль");
      return;
    }

    if (!repeatPass) {
      setError("Повторите новый пароль");
      return;
    }

    if (password !== repeatPass) {
      setError("Кажется, введенные пароли не совпадают");
      return;
    }

    updatePass();
  }

  return (
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo className={styles.logoPic} alt="logo" />
          </Link>
        </div>

        <form className={styles.form}>
          <label className={styles.title}>Новый пароль: </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            className={styles.input}
            type="password"
            placeholder="Повторите пароль"
            value={repeatPass}
            onChange={(e) => setRepeatPass(e.target.value)}
          ></input>
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={onNewPassClick} className={styles.button}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
