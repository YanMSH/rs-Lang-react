import React from 'react';
import { FC } from 'react';
import classes from './TextbookControlButton.module.css';
const TextbookControlButton: FC<{ text: string }> = (props) => {
  return <button className={classes.control__button}>{props.text}</button>;
};

export default TextbookControlButton;
