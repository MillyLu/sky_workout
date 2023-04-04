import { useState } from 'react';
import styles from './index.module.css';
// import { Link } from "react-router-dom";


export function Workout ({title, description, day}) {

    const [active] = useState(false);   /// true - если тренировка выполнена

    return(
        <div className={active ? styles.cardActive : styles.card}>
            <p className={active ? styles.titleActive: styles.title}>{title}</p>
            {
                (description && day) && (
                    <p className={active ? styles.descriptionActive : styles.description}>{description} / {day}</p>
                )
            }
            
        </div>
            

    )

}