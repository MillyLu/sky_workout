import Logo from './img/logo.png';
import Sticker from './img/sale.png';
import Joga from './img/joga.png';
import Stretching from "./img/stretching.png";
import Dance from "./img/dance.png";
import Step from "./img/step.png";
import Bodyflex from "./img/bodyflex.png";
import { WorkoutItem } from '../../components/WorkoutItem/WorkoutItem';
import s from './Main.module.css';

export const Main = () => {
    return (
      <div className={s.mainpage}>
        <header className={s.header}>
          <img className={s.logo} src={Logo} alt="logo" />
          <button className={s.button}>Войти</button>
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
          <WorkoutItem name={"Йога"} img={Joga} />
          <WorkoutItem name={"Стретчинг"} img={Stretching} />
          <WorkoutItem name={"Танцевальный фитнес"} img={Dance} />
          <WorkoutItem name={"Степ-аэробика"} img={Step} />
          <WorkoutItem name={"Бодифлекс"} img={Bodyflex} />
        </div>
        <button className={s.up_button}>Наверх</button>
      </div>
    );
}