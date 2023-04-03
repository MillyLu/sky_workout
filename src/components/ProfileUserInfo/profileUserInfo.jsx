import styles from './index.module.css';

export function ProfileUserInfo () {

    return(
        <div className={styles.userInfo}>
            <h1 className={styles.userInfo__title}>Мой профиль</h1>
            <div className={styles.userInfo__login}>
                <p className={styles.userInfo__login_title}>Логин: </p>
                <p className={styles.userInfo__login_field}>sergey.petrov96</p>
            </div>
            <div className={styles.userInfo__password}>
                <p className={styles.userInfo__password_title}>Пароль: </p>
                <p className={styles.userInfo__password_field}>4fkhdj880d</p>
            </div>
            <button className={styles.userInfo__button}>Редактировать логин</button>
            <button className={styles.userInfo__button}>Редактировать пароль</button>
        </div>
    )
}