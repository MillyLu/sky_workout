import ButtonMain from "../Exercises/ButtonMain/ButtonMain";
import classes from "./ProgressModal.module.css";
import { useForm } from "react-hook-form";
import InputProgress from "./Progress/Progress";
import { getUserId } from "../../hooks/user-auth";
import {
  useAddUserProgressMutation,


} from "../../services/courses";
import { useSelector } from "react-redux";


const ProgressModal = ({ data, onClick, workout }) => {

  //const { data: , isError } = useGetWorkoutByIdQuery(workout);

  const maxValue = data?.exercise.map((item) => item[1]);
  const [userProgress] = useAddUserProgressMutation();
  const userId = useSelector(getUserId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onClick();

    const userValues = Object.values(data);
    const maxUserValue = Math.max(...userValues);

    let progressStatus;
    if (maxUserValue < Math.max(...maxValue)) {
      progressStatus = "in progress";
    } else if (maxUserValue === Math.max(...maxValue)) {
      progressStatus = "done";
    }

    userProgress({
      id: userId,
      progress: userValues,
      workoutId: workout.id,
      status: progressStatus,
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes.title}>Мой прогресс</h2>
      <div className={classes.inputs}>
        {data?.exercise?.map((exercise, index) => (
          <div key={index}>
            <label className={classes.text}>
              {`Сколько раз вы сделали упражнение ${exercise[0].toLowerCase()}?`}
              <InputProgress
                name={exercise[0]}
                register={register}
                errors={errors}
                max={exercise[1]}
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
