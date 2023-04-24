import s from "./Profile.module.css";
import ProfilePhoto from "./img/profile_img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../hooks/user-auth";
import { removeUser } from "../../store/slices/userSlice";
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
