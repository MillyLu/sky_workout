import s from "./Profile.module.css";
import ProfilePhoto from "./img/img.png";

export const Profile = ({ setUser, profile }) => {
  return (
    <div className={profile ? s.profileNotMain : s.profile}>
      <img className={s.photo} src={ProfilePhoto} alt="profile_photo" />
      <p className={profile ? s.nameNotMain : s.name}>Имя</p>
      <button className={profile ? s.buttonNotMain : s.button} onClick={() => setUser(null)}>
        Выйти
      </button>
    </div>
  );
};
