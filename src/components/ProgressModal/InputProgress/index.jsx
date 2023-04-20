import cn from 'classnames'
import classes from './index.module.css'

const InputProgress = ({ className, value, onChange, errors, name }) => {
  return (
    <>
      <input
        className={cn(className, classes.input)}
        type="text"
        placeholder="Введите значение"
        value={value}
        onChange={onChange}
      />
      <span className={classes.message}>{errors[name]?.message}</span>
    </>
  )
}

export default InputProgress