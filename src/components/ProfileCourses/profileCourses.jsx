import styles from './index.module.css';
import Yoga from './joga.png';
import Stretching from './stretching.png';
import Bodyflex from './bodyflex1.png';
import { WorkoutItem } from '../WorkoutItem/WorkoutItem';

export function ProfileCourses({setModalActiveWorkout, setWorkout}) {

    const YogaOnClick = () =>  {
        setWorkout('Yoga');
        setModalActiveWorkout(true);
    }

    const StretchingOnClick = () =>  {
        setWorkout('Stretching');
        setModalActiveWorkout(true);
    }

    const BodyflexOnClick = () =>  {
        setWorkout('Bodyflex');
        setModalActiveWorkout(true);
    }

    return(
        <div className={styles.courses}>
            <h2 className={styles.courses__title}>Мои курсы</h2>
            <div className={styles.courses__content}>
                <div className={styles.courses__card}>
                    <WorkoutItem name={"Йога"} img={Yoga} />
                    <button onClick={YogaOnClick} className={styles.courses__card_button}>Перейти →</button>
                </div>
                <div className={styles.courses__card}>
                    <WorkoutItem name={"Стретчинг"} img={Stretching} />
                    <button onClick={StretchingOnClick} className={styles.courses__card_button}>Перейти →</button>
                </div>
                <div className={styles.courses__card}>
                    <WorkoutItem name={"Бодифлекс"} img={Bodyflex} />
                    <button onClick={BodyflexOnClick} className={styles.courses__card_button}>Перейти →</button>
                </div>
            </div>
        </div>
    )
}