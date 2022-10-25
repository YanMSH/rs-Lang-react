import React from 'react';
import { FC } from 'react';
import classes from './TextbookControlButton.module.css';
const TextbookControlButton: FC<{ text: string; onClick?: () => void }> = (props) => {
  return (
    <button className={classes.control__button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default TextbookControlButton;
