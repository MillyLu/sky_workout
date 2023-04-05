import { useState } from 'react';
import styles from './index.module.css';
import { ReactComponent as Done } from './done.svg';
import { Link } from "react-router-dom";


export function Workout ({title, description, day}) {

    const [active] = useState(true);   /// true - если тренировка выполнена

    return(
        <Link className={styles.link} to='/video'>
            <div className={active ? styles.cardActive : styles.card}>
            <div className={styles.header}>

                <p className={active ? styles.titleActive: styles.title}>{title}</p>
            {
                (active) && (
                    <Done className={styles.done}/>
                )
             }

            
            </div>
            
            {
                (description && day) && (
                    <p className={active ? styles.descriptionActive : styles.description}>{description} / {day}</p>
                )
            }
            
        </div>
        </Link>
        
            

    )

}