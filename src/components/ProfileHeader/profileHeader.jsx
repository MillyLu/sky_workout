import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Profile } from "../Profile/Profile";
import styles from "./index.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo alt="logo" />
      </Link>
      <div className={styles.user}>
        <Link to="/profile">
          <Profile profile={true} />
        </Link>
      </div>
    </header>
  );
}
