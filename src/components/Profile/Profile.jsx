import s from "./Profile.module.css";
import ProfilePhoto from "./img/img.jpg";

=======
import { useDispatch } from "react-redux";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../Hooks/user-auth";
import { useAuth } from "../../Hooks/user-auth";
import { removeUser } from "../../store/Slices/userSlice";
import { useGetloginByIdQuery } from "../../services/courses";
import { useState } from "react";


export const Profile = ({ profile }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');

  const { id } = useAuth();
  axios
    .get(
      `https://skypro-workout-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/.json`
    )
    .then((response) => {
      const data = response.data;
      setUser(data.username);
    })

  const toggleLogOut = () => {
    dispatch(removeUser());
  };

  const userId = useSelector(getUserId);
console.log(userId);
  const {data} = useGetloginByIdQuery(userId);
console.log(data);
  return (
    <div className={profile ? s.profileNotMain : s.profile}>
      <img className={s.photo} src={ProfilePhoto} alt="profile_photo" />

      <p className={profile ? s.nameNotMain : s.name}>{user}</p>

      <button
        className={profile ? s.buttonNotMain : s.button}
        onClick={toggleLogOut}
      >
        Выйти
      </button>
    </div>
  );
};
