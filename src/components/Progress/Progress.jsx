import React from "react";
import cn from "classnames";
import classes from "./Progress.module.css";
import { useGetUserProgressByIdQuery, useGetWorkoutByIdQuery } from "../../services/courses";
import { useSelector } from "react-redux";
import { getUserId } from "../../hooks/user-auth";


const Progress = ({ data, workoutId }) => {
  const userId = useSelector(getUserId);
  console.log(data);
  
  const {
    data: userProgress1,
    isSuccess,
    isError,
  } = useGetUserProgressByIdQuery(userId);


  console.log(userProgress1);

  /*let Data =   fetch(`https://skypro-workout-default-rtdb.europe-west1.firebasedatabase.app/workouts/${workoutId}.json`)
  .then(response => response.json())
  .then(data => Data = data);

 */

  const {data: workoutData, isLoading, isSuccess: workoutDataSuccess} = useGetWorkoutByIdQuery(workoutId)
  console.log(workoutData);

  const userProgress2 = [];

  if (isSuccess && userProgress1 != null) {
    const workoutProgress = userProgress1[workoutId]?.progress;



    if (workoutProgress) {
      Object.entries(workoutProgress).forEach(([key, value]) => {
        userProgress2.push(value);
      });
    }


  } else {
    console.log(isError);
  }

  return (
    <div className={classes.progress}>
      <h2 className={classes.title}>Мой прогресс по тренировке:</h2>
      <ul className={classes.list}>
      {isLoading && <span className={classes.loader}></span>}
      {
        workoutDataSuccess && 
          workoutData?.exercise?.map((exercise, index) => {
            const item = userProgress2[index];
            const percent = Math.round(((item || 0) / exercise[1]) * 100);
            return (
              <li key={index} className={classes.listItem}>
                <span className={classes.name}>{exercise[0]}</span>
                <div
                  className={cn(
                    classes.progressbar,
                    classes[`colorBg${index + 1}`]
                  )}
                >
                  <div
                    className={cn(classes.done, classes[`color${index + 1}`])}
                    style={{ width: `${percent}%` }}
                  ></div>
                  <span
                    className={classes.percent}
                    style={{ left: `${percent}px` }}
                  >
                    {percent}%
                  </span>
                </div>
              </li>
            );
          })}
        
      
   
      </ul>
    </div>
  );
};

export default Progress;
