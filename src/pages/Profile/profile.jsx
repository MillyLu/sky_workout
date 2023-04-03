import styles from './index.module.css';
import { Header } from '../../components/ProfileHeader/profileHeader';
import { ProfileUserInfo } from '../../components/ProfileUserInfo/profileUserInfo';
import { ProfileCourses } from '../../components/ProfileCourses/profileCourses';

export function Profile () {

    return(
        <div  className={styles.content}>
            <Header />
            <ProfileUserInfo />
            <ProfileCourses />

        </div>
    )
}

