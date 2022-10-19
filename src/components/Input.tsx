import React, { ChangeEvent } from 'react';
import ClassLister from 'utils/ClassLister';
import classes from './Input.module.css';
const Input: React.FC<{
  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  onFocus: () => void;
  hasError: boolean;
  name: string;
  type: 'text' | 'email' | 'password';
  value: string;
}> = (props) => {
  const classList = ClassLister(classes);
  return (
    <div className={classes.form__field}>
      <input
        onChange={props.onChange}
        onBlur={props.onFocus}
        value={props.value}
        className={props.hasError ? classList('form__input', 'invalid') : classes.form__input}
        type={props.type}
        placeholder={props.name}
      />
    </div>
  );
};

export default Input;
