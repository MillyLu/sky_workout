import styles from './index.module.css';
import { Workout } from '../Workout/Workout';

// import { Link } from "react-router-dom";




export function SelectWorkout ({setModalActiveWorkout, workout}) {

    const training = [
        {id: 1, title: "Утренняя практика", description: "Йога на каждый день", day: "1 день"},
        {id: 2, title: "Красота и здоровье", description: "Йога на каждый день", day: "2 день"},
        {id: 3, title: "Асаны стоя", description: "Йога на каждый день", day: "3 день"},
        {id: 4, title: "Растягиваем мышцы бедра", description: "Йога на каждый день", day: "4 день"},
        {id: 5, title: "Гибкость спины", description: "Йога на каждый день", day: "5 день"},
        {id: 6, title: "Гибкость спины", description: "Йога на каждый день", day: "5 день"},   
    ]

    const stretching = [
        {id: 1, title: "Основы стретчинга"},
        {id: 2, title: "Разогрев мыщц"},
        {id: 3, title: "Разогрев мыщц 2.0"},

    ]

    const bodyflex = [
        {id: 1, title: "Техника дыхания"},
        {id: 2, title: "Тренировка мыщц бедер"},
        {id: 3, title: "Тренировка мыщц ягодиц"},

    ]


    return(
    <div className={styles.modal} onClick={() => setModalActiveWorkout(false)}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
            <h3 className={styles.header}>Выберите тренировку</h3>
            <div className={styles.list}>
            {
                (workout === 'Yoga') && (
                    training.map((item) => (            
                        <Workout key={item.id} title={item.title} description={item.description} day={item.day} />      
                      
                       ))
                )

            }

            {
                
                (workout === 'Stretching') && (
                    stretching.map((item) => (            
                        <Workout key={item.id} title={item.title} />      
                      
                       ))
                )
                 
            }
           
           {
                
                (workout === 'Bodyflex') && (
                    bodyflex.map((item) => (            
                        <Workout key={item.id} title={item.title} />      
                      
                       ))
                )
                 
            }
            </div>

        </div>
    </div>
            

    )

}