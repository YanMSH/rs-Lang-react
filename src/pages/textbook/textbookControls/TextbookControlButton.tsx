import React from 'react';
import { FC } from 'react';
import classes from './TextbookControlButton.module.css';
const TextbookControlButton: FC<{ text: string; disabled?: boolean; onClick?: () => void }> = (
  props
) => {
  return (
    <button className={classes.control__button} onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </button>
  );
};

export default TextbookControlButton;
