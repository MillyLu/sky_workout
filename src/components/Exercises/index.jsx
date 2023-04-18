import ButtonMain from './ButtonMain/index'
import classes from './index.module.css'

const Exercises = ({ onClick, data }) => {
  return (
    <div>
      <h2 className={classes.title}>Упражнения</h2>
      <ul className={classes.list}>
      {data?.exercise?.map(( exercise, index) => (
          <li key={index} className={classes.listItem}>
            {exercise[0]} ({exercise[1]} повторений)
          </li>
        ))}
      </ul>
      <ButtonMain content="Заполнить свой прогресс" onClick={onClick}/>
    </div>
  )
}

export default Exercises