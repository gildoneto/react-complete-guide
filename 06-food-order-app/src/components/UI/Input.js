import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input
        ref={ref}
        id={input.id}
        type={input.type}
        min={input.min}
        max={input.max}
        step={input.step}
        defaultValue={input.defaultValue}
      />
    </div>
  );
});

export default Input;
