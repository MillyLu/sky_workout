import cn from "classnames";
import classes from "./index.module.css";

const InputProgress = ({ className, register, errors, name, max }) => {
  return (
    <>
      <input
        className={cn(className, classes.input)}
        type="text"
        placeholder="Введите значение"
        {...register(`${name}`, {
          required: "Обязательно",
          minLength: { value: 1, message: "Минимальная длинна 1" },
          validate: {
            onlyDigits: (value) => /^\d+$/.test(value) || "Только цифры",
            lessThanMax: (value) =>
              parseInt(value) <= parseInt(max) ||
              `Максимальное значение: ${max}`,
          },
        })}
      />
      <span className={classes.message}>{errors[name]?.message}</span>
    </>
  );
};

export default InputProgress;
