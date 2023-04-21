import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useGetWorkoutDoneQuery } from "../../services/courses";
import { getUserId } from "../../Hooks/user-auth";
import { useSelector } from "react-redux";

export function Workout({ title, description, path, userProgress, workout }) {
  const [active, setActive] = useState(false); /// true - если тренировка выполнена
  const workoutId = workout._id;
  console.log(workoutId);
  const userId = useSelector(getUserId);

  const { data: Done } = useGetWorkoutDoneQuery({
    id: userId,
    workoutId,
  });

  console.log(Done);

  useEffect(() => {
    if (Done === "done") {
      setActive(true);
    }
  }, [Done]);

  return (
    <Link className={styles.link} to={path}>
      <div className={active ? styles.cardActive : styles.card}>
        <div className={styles.header}>
          <p className={active ? styles.titleActive : styles.title}>{title}</p>
          {active && <Done className={styles.done} />}
        </div>

        {description && (
          <p className={active ? styles.descriptionActive : styles.description}>
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
