import logo from './logo.png';
import styles from './index.module.css';

export function Header () {

    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logo} alt='logo'/>
            <div className={styles.user}>
                <div className={styles.userAvatar}></div>
                <select className={styles.userName} name="select">

  <option value="value1" className={styles.userName} selected>Сергей</option>
  <option value="value2">Другой</option>
  </select>

            </div>
        </header>
        
    )
}


