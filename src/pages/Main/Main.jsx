import Logo from "./img/logo.png";
import Sticker from "./img/sale.png";
import Joga from "./img/joga.png";
import Stretching from "./img/stretching.png";
import Dance from "./img/dance.png";
import Step from "./img/step.png";
import Bodyflex from "./img/bodyflex.png";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { LogIn } from "../LogIn/Login";
import { SignUp } from "../SignUp/SignUp";
import { WorkoutItem } from "../../components/WorkoutItem/WorkoutItem";
import { Profile } from "../../components/Profile/Profile";
import s from "./Main.module.css";
import { useState } from "react";
import { useGetCoursesQuery } from "../../services/courses";

export const Main = ({ user }) => {
  const [modalActive, setModalActive] = useState(false);

  const [signUp, setSignUp] = useState(false);

  const { data } = useGetCoursesQuery();
  console.log(data);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={s.mainpage}>
      <header className={s.header}>
        <Link to="/">
          <img className={s.logo} src={Logo} alt="logo" id="logo" />
        </Link>
        {user ? (
          <Link to="/profile">
            <Profile user={user} />
          </Link>
        ) : (
          <button className={s.button} onClick={() => setModalActive(true)}>
            Войти
          </button>
        )}
      </header>
      <div className={s.title}>
        <div>
          <p className={s.online}>Онлайн-тренировки для занятий дома</p>
          <p className={s.begin}>
            Начните заниматься спортом и улучшите качество жизни
          </p>
        </div>
        <div>
          <img className={s.sticker} src={Sticker} alt="sticker" />
        </div>
      </div>
      <div className={s.main_items}>
     
        {
            (data && data.map((item) => (
              <Link to={/course/+item._id} key={item._id}>
                <WorkoutItem 
                key={item._id}
                name={item.name}
                img={(item.name === "Йога"? Joga : item.name === "Бодифлекс" ? Bodyflex : item.name === "Стретчинг" ? Stretching : item.name === "Танцевальный фитнес" ? Dance : Step)}

                />
              </Link>
               

            )
            ))
          }
      </div>
      <button className={s.up_button} onClick={scrollToTop}>
        Наверх ↑
      </button>
      {modalActive && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          setSignUp={setSignUp}>
          {signUp ? (
            <SignUp setActive={setModalActive} />
          ) : (
            <LogIn setSignUp={setSignUp} setActive={setModalActive} />
          )}
        </Modal>
      )}
    </div>
  );
};
