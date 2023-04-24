import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { Header } from "../../components/ProfileHeader/profileHeader";
import { ProfileUserInfo } from "../../components/ProfileUserInfo/profileUserInfo";
import { ProfileCourses } from "../../components/ProfileCourses/profileCourses";
import { NewPassword } from "../../components/NewPassword/NewPassword";
import { NewLogin } from "../../components/NewLogin/NewLogin";

import { getUserId } from "../../hooks/user-auth";
import {
  useGetUserCoursesQuery,
  useGetCoursesQuery,
} from "../../services/courses";

export function Profile() {
  const [modalActivePass, setModalActivePass] = useState(false);
  const [modalActiveLogin, setModalActiveLogin] = useState(false);
  const [nLogin, setNLogin] = useState("");
  const [nPass, setNPass] = useState("");

  const userId = useSelector(getUserId);

  const { data: userCoursesIds } = useGetUserCoursesQuery(userId);

  const { data } = useGetCoursesQuery("", {
    selectFromResult: ({ data }) => ({
      data: data?.filter((course) => userCoursesIds?.includes(course._id)),
    }),
  });

  return (
    <div className={styles.content}>
      <Header />
      <ProfileUserInfo
        setActive={setModalActivePass}
        setModalActiveLogin={setModalActiveLogin}
        nLogin={nLogin}
        nPass={nPass}
      />
      <ProfileCourses data={data} />
      {modalActivePass && (
        <NewPassword setActive={setModalActivePass} setNPass={setNPass} />
      )}
      {modalActiveLogin && (
        <NewLogin
          setModalActiveLogin={setModalActiveLogin}
          setNLogin={setNLogin}
        />
      )}
    </div>
  );
}
