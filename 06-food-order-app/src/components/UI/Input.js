import styles from './Input.module.css';

const Input = ({ label, input }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input
        id={input.id}
        type={input.type}
        min={input.min}
        max={input.max}
        step={input.step}
        defaultValue={input.defaultValue}
      />
    </div>
  );
};

export default Input;
