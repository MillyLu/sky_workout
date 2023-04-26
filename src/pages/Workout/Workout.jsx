import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Header } from "../../components/ProfileHeader/ProfileHeader";
import Exercises from "../../components/Exercises/Exercises";
import Progress from "../../components/Progress/Progress";
import classes from "./Workout.module.css";
import ProgressModal from "../../components/ProgressModal/ProgressModal";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import Modal from "../../components/ProgressModal/Modal/Modal";
import { useParams } from "react-router";
import { useGetWorkoutByIdQuery } from "../../services/courses";

const Workout = () => {
  const [isProgressModalShown, setIsProgressModalShown] = useState(false);
  const [isSuccessModalShown, setIsSuccessModalShown] = useState(false);

  const id = useParams();
  const workoutId = id.id
  console.log(workoutId);

  const { data, isError } = useGetWorkoutByIdQuery(workoutId);

  if(isError) {
    console.log(isError);
  }

  const openCloseProgressModal = () => {
    setIsProgressModalShown(!isProgressModalShown);
  };

  const onHandleClick = () => setIsProgressModalShown(true);

  const onHandleSendClick = () => {
    setIsProgressModalShown(false);
    setIsSuccessModalShown(true);
  };



  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <h1 className={classes.heading}>{data?.course}</h1>
        <h2 className={classes.title}>{data?.description}</h2>
        <div className={classes.player}>
          <ReactPlayer url={data?.link} width="100%" height="100%" />
        </div>

        <div className={classes.exercises}>
          <Exercises data={data} onClick={onHandleClick} />
          <Progress data={data} workoutId={id.id} />
        </div>
      </main>
      {isProgressModalShown && (
        <Modal onClick={openCloseProgressModal}>
          <ProgressModal workout={id} data={data} onClick={onHandleSendClick} />
        </Modal>
      )}
      {isSuccessModalShown && (
        <SuccessModal setIsSuccessModalShown={setIsSuccessModalShown} />
      )}
    </div>
  );
};

export default Workout;
