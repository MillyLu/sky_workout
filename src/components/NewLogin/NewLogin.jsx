import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewLogin } from "../../store/Slices/userSlice";
import { getAuth, updateProfile } from "firebase/auth";
import { useUpdateUserLoginMutation } from "../../services/courses";
import { getUserId } from "../../Hooks/user-auth";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";

export function NewLogin({ setModalActiveLogin, setNLogin }) {
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const [updateLoginDB] = useUpdateUserLoginMutation();

  function updateLogin() {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: login,
    })
      .then(() => {
        dispatch(
          setNewLogin({
            login: login,
          })
        );

        updateLoginDB({
          id: userId,
          username: login,
        });

        setNLogin(login);

        setModalActiveLogin(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function changeLogin(e) {
    e.preventDefault();

    if (!login) {
      setError("Введите новый login");
      return;
    }

    updateLogin();
  }

  return (
    <div className={styles.modal} onClick={() => setModalActiveLogin(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo className={styles.logoPic} alt="logo" />
          </Link>
        </div>

        <form className={styles.form}>
          <label className={styles.title}>Новый логин: </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></input>
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={changeLogin} className={styles.button}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
