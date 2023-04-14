import s from "./Profile.module.css";
import ProfilePhoto from "./img/img.jpg";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/Slices/userSlice";

export const Profile = ({ profile, email }) => {
  const dispatch = useDispatch();

  const toggleLogOut = () => {
    dispatch(removeUser());
  };
  return (
    <div className={profile ? s.profileNotMain : s.profile}>
      <img className={s.photo} src={ProfilePhoto} alt="profile_photo" />
      <p className={profile ? s.nameNotMain : s.name}>{email}</p>
      <button
        className={profile ? s.buttonNotMain : s.button}
        onClick={toggleLogOut}
      >
        Выйти
      </button>
    </div>
  );
};
