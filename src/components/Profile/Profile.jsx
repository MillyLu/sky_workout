import s from "./Profile.module.css";
import ProfilePhoto from "./img/img.png";

export const Profile = ({setUser}) => {
  return (
    <div className={s.profile}>
      <img className={s.photo} src={ProfilePhoto} alt="profile_photo" />
      <p className={s.name}>Имя</p>
      <button className={s.button} onClick={()=>setUser(null)}>Выйти</button>
    </div>
  );
};
