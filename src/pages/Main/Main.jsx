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
import { WorkoutItem } from "../../components/WorkoutItem/WorkoutItem";
import s from "./Main.module.css";
import { useState } from "react";

export const Main = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={s.mainpage}>
      <header className={s.header}>
        <Link to="/">
          <img className={s.logo} src={Logo} alt="logo" id="logo" />
        </Link>
        <button
          className={s.button}
          onClick={() => setModalActive(true)}>
          Войти
        </button>
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
        <Link to="/yoga">
          <WorkoutItem name={"Йога"} img={Joga} />
        </Link>
        <Link to="/stretching">
          <WorkoutItem name={"Стретчинг"} img={Stretching} />
        </Link>
        <Link to="/dance_fitness">
          <WorkoutItem name={"Танцевальный фитнес"} img={Dance} />
        </Link>
        <Link to="/step_aerobics">
          <WorkoutItem name={"Степ-аэробика"} img={Step} />
        </Link>
        <Link to="/bodyflex">
          <WorkoutItem name={"Бодифлекс"} img={Bodyflex} />
        </Link>
      </div>
      <button className={s.up_button}>Наверх ↑</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <LogIn />
      </Modal>
    </div>
  );
};
