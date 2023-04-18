import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useAuth } from "../../Hooks/user-auth";
import { getAuth } from "@firebase/auth";
import { getUserId, getUserPass } from "../../Hooks/user-auth";
import { useGetloginByIdQuery } from "../../services/courses";

export function ProfileUserInfo({ setActive, setModalActiveLogin, nLogin, nPass }) {
  const user = useAuth();
  const auth = getAuth();
  const userDB = auth.currentUser;
  const userId = useSelector(getUserId);
  const userPass = useSelector(getUserPass);
  const {data} = useGetloginByIdQuery(userId);
  const [login, setLogin] = useState(data);
  const [pass, setPass] = useState(userPass);
  const [hidePass, setHidePass] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [icon, setIcon] = useState(eyeOff);

  console.log(userDB.displayName);

  useEffect(() => {
    if(!nLogin) return;
    setLogin(nLogin)
  }, [nLogin]);

  useEffect(() => {
    if(!nPass) return;
    setPass(nPass)
  }, [nPass])

  
  console.log(user);
  console.log(data);
  console.log(userPass);

  function handleChange() {
    if (hidePass) {
      setIcon(eye);
      setHidePass(false);
      setShowPass(true);
      return;
    }
    setIcon(eyeOff);
    setHidePass(true);
    setShowPass(false);
  }

  return (
    <div className={styles.userInfo}>
      <h1 className={styles.userInfo__title}>Мой профиль</h1>
      <div className={styles.userInfo__login}>
        <p className={styles.userInfo__login_title}>Логин: </p>
        <p className={styles.userInfo__login_field}>{login}</p>
      </div>
      <div className={styles.userInfo__password}>
        <p className={styles.userInfo__password_title}>Пароль: </p>
        {hidePass && (
          <input
            type="password"
            className={styles.userInfo__password_field}
            value={pass}
            readOnly
          />
        )}
        {showPass && (
          <input
            type="text"
            className={styles.userInfo__password_field}
            placeholder={pass}
            readOnly
          />
        )}

        <span onClick={handleChange}>
          <Icon icon={icon} size={25} />
        </span>
      </div>
      <button
        onClick={() => setModalActiveLogin(true)}
        className={styles.userInfo__button}
      >
        Редактировать логин
      </button>
      <button
        onClick={() => setActive(true)}
        className={styles.userInfo__button}
      >
        Редактировать пароль
      </button>
    </div>
  );
}
