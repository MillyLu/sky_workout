import s from "./Profile.module.css";
import ProfilePhoto from "./img/img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../Hooks/user-auth";
import { removeUser } from "../../store/Slices/userSlice";
import { useGetloginByIdQuery } from "../../services/courses";

export const Profile = ({ profile }) => {
  const dispatch = useDispatch();

  const toggleLogOut = () => {
    dispatch(removeUser());
  };

  const userId = useSelector(getUserId);
  const { data } = useGetloginByIdQuery(userId);
  return (
    <div className={profile ? s.profileNotMain : s.profile}>
      <img className={s.photo} src={ProfilePhoto} alt="profile_photo" />

      <p className={profile ? s.nameNotMain : s.name}>{data}</p>

      <button
        className={profile ? s.buttonNotMain : s.button}
        onClick={toggleLogOut}
      >
        Выйти
      </button>
    </div>
  );
};
