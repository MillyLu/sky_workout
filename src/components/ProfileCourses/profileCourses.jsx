import { useState } from "react";
import styles from "./index.module.css";
import Yoga from "./joga.png";
// import Йога from "./Йога.png";
import Stretching from "./stretching.png";
import Bodyflex from "./bodyflex1.png";
import { WorkoutItem } from "../WorkoutItem/WorkoutItem";
import { Button } from "../WorkoutItem/Button";
import { SelectWorkout } from "../../components/SelectWorkout/SelectWorkout";


export function ProfileCourses({  data }) {

  const [modalActiveWorkout, setModalActiveWorkout] = useState(false);
  const [workout, setWorkout] = useState("");
  const YogaOnClick = () => {
    setWorkout("Yoga");
    setModalActiveWorkout(true);
  };

  const StretchingOnClick = () => {
    setWorkout("Stretching");
    setModalActiveWorkout(true);
  };

  const BodyflexOnClick = () => {
    setWorkout("Bodyflex");
    setModalActiveWorkout(true);
  };

  const onClick = (e) => {
    setWorkout(e.target.value);
    console.log(workout);
    setModalActiveWorkout(true);

  }

  

  return (
    <div className={styles.courses}>
      <h2 className={styles.courses__title}>Мои курсы</h2>
      <div className={styles.courses__content}>
       
          {
            (data && data.map((item) => (
              <div className={styles.courses__card}>
              <WorkoutItem 
              key={item._id}
              name={item.name}
              img={Yoga}
              button={<Button value={item._id} function={onClick} button={"Перейти →"} />}
              />
              </div>
            )
            ))
          }

        <div className={styles.courses__card}>
          <WorkoutItem
            name={"Йога"}
            img={Yoga}
            button={<Button function={YogaOnClick} button={"Перейти →"} />}
          />
        </div>
        <div className={styles.courses__card}>
          <WorkoutItem
            name={"Стретчинг"}
            img={Stretching}
            button={
              <Button function={StretchingOnClick} button={"Перейти →"} />
            }
          />
        </div>
        <div className={styles.courses__card}>
          <WorkoutItem
            name={"Бодифлекс"}
            img={Bodyflex}
            button={<Button function={BodyflexOnClick} button={"Перейти →"} />}
          />
        </div>
      </div>
      {modalActiveWorkout && (
        <SelectWorkout
          data ={data}
          setModalActiveWorkout={setModalActiveWorkout}
          workout={workout}
        />
      )}
    </div>
  );
}
