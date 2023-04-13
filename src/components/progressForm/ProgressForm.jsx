import s from "./progressForm.module.css";
import { useState } from 'react';
import ProgressImg from '../../img/progress.png'





export const ProgressForm = ({ onClick }) => {
const [isClick, setIsClick] = useState(false);
const tasks = [
    'Наклон вперед (10 повторений)',
    'Наклон назад (10 повторений)',
    'Поднятие ног, согнутых в коленях (5 повторений)',
  ];
  
const onSubmitClick = () => {
    onClick();
    setIsClick(true);
};
const list = tasks.map((item) => (
    <div className={s.item} key={item.toString()}>
    <p className={s.Text}>
        Сколько раз вы сделали {item.split('(')[0].toLowerCase()}?
    </p>
    <input className={s.Input} type="number" placeholder="Введите значение"/>
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
}