import styles from "./index.module.css";
import { Workout } from "../Workout/Workout";
import {
  useGetWorkoutsQuery,
  useGetAllWorkoutsInCourseQuery,
  useGetUserProgressByIdQuery,
} from "../../services/courses";
import { useSelector } from "react-redux";
import { getUserId } from "../../Hooks/user-auth";

export function SelectWorkout({ setModalActiveWorkout, workout }) {
  const { data: courseWorkouts } = useGetAllWorkoutsInCourseQuery(workout);

  const userId = useSelector(getUserId);
  const { data: userProgress } = useGetUserProgressByIdQuery(userId);

  const { data } = useGetWorkoutsQuery("", {
    selectFromResult: ({ data }) => ({
      data: data?.filter((workout) => courseWorkouts?.includes(workout._id)),
    }),
  });

  return (
    <div className={styles.modal} onClick={() => setModalActiveWorkout(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.header}>Выберите тренировку</h3>
        <div className={styles.list}>
          {data &&
            data.map((item) => (
              <Workout
                key={item._id}
                title={item.name}
                description={item.description}
                path={"/workout/" + item._id}
                userProgress={userProgress}
                workout={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
