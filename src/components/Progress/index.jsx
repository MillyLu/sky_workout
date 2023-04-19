import React from 'react';
import cn from 'classnames';
import classes from './index.module.css';
import { useGetUserProgressByIdQuery } from '../../services/courses';
import { useGetCourseByIdQuery } from '../../services/courses';
import { useSelector } from 'react-redux';
import { getUserId } from '../../Hooks/user-auth';

const Progress = ({ data }) => {
  const userId = useSelector(getUserId);
  const {userProgress1} = useGetUserProgressByIdQuery(userId);
  const {userProgress2} = useGetCourseByIdQuery();
 
  const userProgress = 6;

  return (
    <div className={classes.progress}>
      <h2 className={classes.title}>Мой прогресс по тренировке:</h2>
      <ul className={classes.list}>
        {data?.exercise?.map((exercise, index) => {
          const percent = Math.round(((userProgress || 0) / exercise[1]) * 100);
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
                  className={cn(
                    classes.done,
                    classes[`color${index + 1}`]
                  )}
                  style={{ width: `${percent}%` }}
                ></div>
                <span
                  className={classes.percent}
                  style={{ left: `${percent}px` }}
                >
                  {percent}%
                </span>
              </div>
              <button onClick={()=> console.log(userProgress1) }>ffff</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Progress;
