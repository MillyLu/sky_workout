import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
import styles from "./index.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo alt="logo" />
      </Link>
      <div className={styles.user}>
        <div className={styles.userAvatar}></div>
        <select
          className={styles.userName}
          defaultValue={"value1"}
          name="select"
        >
          <option value="value1" className={styles.userName}>
            Сергей
          </option>
          <option value="value2">Выйти</option>
        </select>
      </div>
    </header>
  );
}
