import React from "react";
import cn from "classnames";
import classes from "./index.module.css";
import { useGetUserProgressByIdQuery } from "../../services/courses";
import { useSelector } from "react-redux";
import { getUserId } from "../../Hooks/user-auth";

const Progress = ({ data, workoutId }) => {
  const userId = useSelector(getUserId);
  const {
    data: userProgress1,
    isSuccess,
    isError,
  } = useGetUserProgressByIdQuery(userId);

  if (isSuccess) {
    const workoutProgress = userProgress1[workoutId]?.progress;
    const userProgress2 = [];

    if (workoutProgress) {
      Object.entries(workoutProgress).forEach(([key, value]) => {
        userProgress2.push(value);
      });
    }

    return (
      <div className={classes.progress}>
        <h2 className={classes.title}>Мой прогресс по тренировке:</h2>
        <ul className={classes.list}>
          {data?.exercise?.map((exercise, index) => {
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
  } else {
    console.log(isError);
  }
};

export default Progress;
