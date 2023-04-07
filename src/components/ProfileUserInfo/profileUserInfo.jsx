import { useState } from 'react';
import styles from './index.module.css';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

export function ProfileUserInfo ({setActive, setModalActiveLogin}) {

    const [pass] = useState('4fkhdj880d');
    const [hidePass, setHidePass] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [icon, setIcon]=useState(eyeOff);
    
    function handleChange () {
        if(hidePass) {
            setIcon(eye)
            setHidePass(false);
            setShowPass(true);
            return
        }
        setIcon(eyeOff)
        setHidePass(true);
        setShowPass(false)
    }

    return(
        <div className={styles.userInfo}>
            <h1 className={styles.userInfo__title}>Мой профиль</h1>
            <div className={styles.userInfo__login}>
                <p className={styles.userInfo__login_title}>Логин: </p>
                <p className={styles.userInfo__login_field}>sergey.petrov96</p>
            </div>
            <div className={styles.userInfo__password}>
                <p className={styles.userInfo__password_title}>Пароль: </p>
                {(hidePass) && (
                    <input type='password' className={styles.userInfo__password_field} value={pass} readOnly />
                )}
                {(showPass) && (
                    <input type='text' className={styles.userInfo__password_field} placeholder={pass} readOnly/>
                )}

<span onClick={handleChange}><Icon icon={icon} size={25}/></span>
            </div>
            <button onClick={() => setModalActiveLogin(true)} className={styles.userInfo__button}>Редактировать логин</button>
            <button onClick={() => setActive(true)} className={styles.userInfo__button}>Редактировать пароль</button>
        </div>
    )
}