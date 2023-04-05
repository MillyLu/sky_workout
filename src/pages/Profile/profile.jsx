import { useState } from 'react';
import styles from './index.module.css';
import { Header } from '../../components/ProfileHeader/profileHeader';
import { ProfileUserInfo } from '../../components/ProfileUserInfo/profileUserInfo';
import { ProfileCourses } from '../../components/ProfileCourses/profileCourses';
import { NewPassword } from '../../components/NewPassword/NewPassword';
import { NewLogin } from '../../components/NewLogin/NewLogin';
import { SelectWorkout } from '../../components/SelectWorkout/SelectWorkout';

export function Profile () {

    const [modalActivePass, setModalActivePass] = useState(false);
    const [modalActiveLogin, setModalActiveLogin] = useState(false);
    const [modalActiveWorkout, setModalActiveWorkout] = useState(false);
    const [workout, setWorkout] = useState('')

    return(
        <div  className={styles.content}>
            <Header />
            <ProfileUserInfo setActive={setModalActivePass} setModalActiveLogin={setModalActiveLogin}/>
            <ProfileCourses setModalActiveWorkout={setModalActiveWorkout} setWorkout={setWorkout}/>
            {modalActivePass && (
                <NewPassword  setActive={setModalActivePass}/>
            )             
            }
            {modalActiveLogin && (
                <NewLogin setModalActiveLogin={setModalActiveLogin}/>
            )             
            }
             {modalActiveWorkout && (
                <SelectWorkout setModalActiveWorkout={setModalActiveWorkout} workout={workout}/>
            )             
            }
        </div>
    )
}

