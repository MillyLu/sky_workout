import s from "./progressForm.module.css";
import { useState } from 'react';
import ProgressImg from '../../img/progress.png'

export const ProgressForm = ({ onClick, tasks }) => {
  const [isClick, setIsClick] = useState(false);
  const [progressValues, setProgressValues] = useState({});
  console.log('progressValues:', progressValues);

  
  const onSubmitClick = () => {
    onClick();
    setIsClick(true);

    const newProgressValues = {};
    tasks.forEach((item, index) => {
        const input = document.getElementById(`input-${index}`);
        newProgressValues[index] = input.value;
    });

    setProgressValues(newProgressValues);
  };

  const list = tasks.map((item, index) => (
    <div className={s.item} key={item.toString()}>
      <p className={s.Text}>
        Сколько раз вы сделали {item.split('(')[0].toLowerCase()}?
      </p>
      <input
        className={s.Input}
        type="number"
        placeholder="Введите значение"
        value={progressValues[index] || ""}
        onChange={(event) => {
          const newProgressValues = { ...progressValues };
          newProgressValues[index] = event.target.value;
          setProgressValues(newProgressValues);
        }}
        id={`input-${index}`}
      />
    </div>
  ));

  
  return isClick ? (
    <div className={s.ContentComplete}>
      <img className={s.image} src={ProgressImg} alt="comp" />
    </div>
  ) : (
    <div className={s.container}>
      <div className={s.Content}>
        <p className={s.Title}>Мой прогресс</p>
        <div className={s.List}>{list}</div>
        <button className={s.button1} onClick={onSubmitClick}>
          Отправить
        </button>
      </div>
    </div>
  );
};
