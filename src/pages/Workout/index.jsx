import { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Header } from "../../components/ProfileHeader/profileHeader";
import Exercises from '../../components/Exercises'
import Progress from '../../components/Progress'
import classes from './index.module.css'
import ProgressModal from '../../components/ProgressModal/index'
import SuccessModal from '../../components/SuccessModal/index'
import Modal from '../../components/ProgressModal/Modal/index'

const Workout = () => {
  const [isProgressModalShown, setIsProgressModalShown] = useState(false)
  const [isSuccessModalShown, setIsSuccessModalShown] = useState(false)

  const openCloseProgressModal = () => {
    setIsProgressModalShown(!isProgressModalShown)
  }

  const handleClick = () => setIsProgressModalShown(true)

  const handleSendClick = () => {
    setIsProgressModalShown(false)
    setIsSuccessModalShown(true)
  }

  return (
    <div className={classes.container}>
      <header className={classes.header}>
          <Header />
      </header>
      <main className={classes.main}>
        <h1 className={classes.heading}>Йога</h1>
        <h2 className={classes.title}>
          Красота и здоровье / Йога на каждый день / 2 день
        </h2>
        <div className={classes.player}>
          <ReactPlayer
            url={'https://youtu.be/v-xTLFDhoD0'}
            width="100%"
            height="100%"
          />
        </div>
        <div className={classes.exercises}>
          <Exercises onClick={handleClick}/>
          <Progress />
        </div>
      </main>
      {isProgressModalShown && (
        <Modal onClick={openCloseProgressModal}>
          <ProgressModal onClick={handleSendClick} />
        </Modal>
      )}
      {isSuccessModalShown && (
        <SuccessModal setIsSuccessModalShown={setIsSuccessModalShown} />
      )}
    </div>
  )
}

export default Workout