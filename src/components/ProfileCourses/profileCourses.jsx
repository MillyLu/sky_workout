import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import Yoga from "./joga.png";
import Stretching from "./stretching.png";
import Dance from "./dance.png";
import Step from "./step.png";
import Bodyflex from "./bodyflex1.png";
import { WorkoutItem } from "../WorkoutItem/WorkoutItem";
import { Button } from "../WorkoutItem/Button";
import { SelectWorkout } from "../../components/SelectWorkout/SelectWorkout";
import { getUserId } from "../../Hooks/user-auth";
import { useGetUserCoursesQuery } from "../../services/courses";
import { useGetCoursesQuery } from "../../services/courses";

export function ProfileCourses() {
  const [modalActiveWorkout, setModalActiveWorkout] = useState(false);
  const [workout, setWorkout] = useState("");

  const userId = useSelector(getUserId);

  const { data: userCoursesIds } = useGetUserCoursesQuery(userId);

  const { data, isSuccess, isLoading } = useGetCoursesQuery("", {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      data: data?.filter((course) => userCoursesIds?.includes(course._id)),
      isSuccess,
      isLoading,
    }),
  });

  const onClick = (e) => {
    setWorkout(e.target.value);
    setModalActiveWorkout(true);
  };

  return (
    <div className={styles.courses}>
      <h2 className={styles.courses__title}>Мои курсы</h2>
      <div className={styles.courses__content}>
        {isLoading && <span className={styles.loader}></span>}

        {isSuccess &&
          data &&
          data.map((item) => (
            <div className={styles.courses__card} key={item._id}>
              <WorkoutItem
                key={item._id}
                name={item.name}
                img={
                  item.name === "Йога"
                    ? Yoga
                    : item.name === "Бодифлекс"
                    ? Bodyflex
                    : item.name === "Стретчинг"
                    ? Stretching
                    : item.name === "Танцевальный фитнес"
                    ? Dance
                    : Step
                }
                button={
                  <Button
                    value={item._id}
                    function={onClick}
                    button={"Перейти →"}
                  />
                }
              />
            </div>
          ))}
      </div>
      {modalActiveWorkout && (
        <SelectWorkout
          data={data}
          setModalActiveWorkout={setModalActiveWorkout}
          workout={workout}
        />
      )}
    </div>
  );
}
