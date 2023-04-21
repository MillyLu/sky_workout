import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Header } from "../../components/ProfileHeader/profileHeader";
import Exercises from "../../components/Exercises";
import Progress from "../../components/Progress";
import classes from "./index.module.css";
import ProgressModal from "../../components/ProgressModal/index";
import SuccessModal from "../../components/SuccessModal/index";
import Modal from "../../components/ProgressModal/Modal/index";
import { useParams } from "react-router";
import { useGetWorkoutByIdQuery } from "../../services/courses";

const Workout = () => {
  const [isProgressModalShown, setIsProgressModalShown] = useState(false);
  const [isSuccessModalShown, setIsSuccessModalShown] = useState(false);

  const id = useParams();

  const { data } = useGetWorkoutByIdQuery(id.id);

  const openCloseProgressModal = () => {
    setIsProgressModalShown(!isProgressModalShown);
  };

  const handleClick = () => setIsProgressModalShown(true);

  const handleSendClick = () => {
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
          <Exercises data={data} onClick={handleClick} />
          <Progress data={data} workoutId={id.id} />
        </div>
      </main>
      {isProgressModalShown && (
        <Modal onClick={openCloseProgressModal}>
          <ProgressModal workout={id} data={data} onClick={handleSendClick} />
        </Modal>
      )}
      {isSuccessModalShown && (
        <SuccessModal setIsSuccessModalShown={setIsSuccessModalShown} />
      )}
    </div>
  );
};

export default Workout;
