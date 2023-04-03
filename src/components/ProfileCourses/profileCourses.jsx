import styles from './index.module.css';
import Yoga from './joga.png';
import Stretching from './stretching.png';
import Bodyflex from './bodyflex1.png';

export function ProfileCourses() {

    return(
        <div className={styles.courses}>
            <h2 className={styles.courses__title}>Мои курсы</h2>
            <div className={styles.courses__content}>
                <div className={styles.courses__card}>
                    <h3 className={styles.courses__card_titile}>Йога</h3>
                    <img src={Yoga} className={styles.courses__card_img} alt='йога'/>
                    <button className={styles.courses__card_button}>Перейти →</button>
                </div>
                <div className={styles.courses__card}>
                <h3 className={styles.courses__card_titile}>Стретчинг</h3>
                    <img src={Stretching} className={styles.courses__card_img} alt='стретчинг'/>
                    <button className={styles.courses__card_button}>Перейти →</button>
                </div>
                <div className={styles.courses__card}>
                    <h3 className={styles.courses__card_titile}>Бодифлекс</h3>
                    <img src={Bodyflex} className={styles.courses__card_img} alt='бодифлекс'/>
                    <button className={styles.courses__card_button}>Перейти →</button>
                </div>
            </div>
        </div>
    )
}