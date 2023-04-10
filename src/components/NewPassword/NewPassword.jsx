import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";

export function NewPassword({ setActive }) {
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
          ></input>
          <input
            className={styles.input}
            type="password"
            placeholder="Повторите пароль"
          ></input>
          <button onClick={() => setActive(false)} className={styles.button}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
