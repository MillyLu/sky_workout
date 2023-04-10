import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";

export function NewLogin({ setModalActiveLogin }) {
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
          ></input>
          <button
            onClick={() => setModalActiveLogin(false)}
            className={styles.button}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
