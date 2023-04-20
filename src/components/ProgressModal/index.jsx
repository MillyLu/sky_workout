import ButtonMain from "../Exercises/ButtonMain/index";
import classes from "./index.module.css";
import { useForm } from "react-hook-form";
import InputProgress from "./Progress/index";
import { getUserId } from "../../Hooks/user-auth";
import {
  useAddUserProgressMutation,
  useGetWorkoutByIdQuery,
} from "../../services/courses";
import { useSelector } from "react-redux";
import { clearConfigCache } from "prettier";

const ProgressModal = ({ data, onClick, workout }) => {
  const maxValue = data.exercise.map((item) => item[1]);
  console.log(maxValue);
  const [userProgress] = useAddUserProgressMutation();
  const userId = useSelector(getUserId);

  const { data: workoutById } = useGetWorkoutByIdQuery([workout.id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onClick();

    userProgress({
      id: userId,
      progress: data,
      workoutId: workout.id,
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
