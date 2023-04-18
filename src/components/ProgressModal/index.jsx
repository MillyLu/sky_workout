import { useState } from 'react'
import ButtonMain from '../Exercises/ButtonMain/index'
import classes from './index.module.css'
import InputProgress from './InputProgress/index'

  const ProgressModal = ({ data, onClick }) => {
    const [exerciseCounts, setExerciseCounts] = useState(
      Array(data.length).fill(1)
    );
  
    const handleInputChange = (index, event) => {
      const value = parseInt(event.target.value);
      const newCounts = [...exerciseCounts];
      newCounts[index] = isNaN(value) ? 1 : Math.max(1, Math.min(value, data[index][1]));
      setExerciseCounts(newCounts);
    };
  
   

    return (
      <form className={classes.form} >
      <h2 className={classes.title}>Мой прогресс</h2>
      <div className={classes.inputs}>
        {data?.exercise?.map((exercise, index) => (
          <div key={index} >
            <label className={classes.text}>
              {`Сколько раз вы сделали упражнение ${exercise[0].toLowerCase()}?`}
              <input
              className={classes.input}
                type="number"
                value={exerciseCounts[index]}
                min={1}
                max={exercise[1]}
                onChange={(e) => handleInputChange(index, e)}
              />
            </label>
          </div>
        ))}
     </div>
      <ButtonMain type="submit" content="Отправить" />
      </form>
    );
  };
  
  export default ProgressModal;
  

