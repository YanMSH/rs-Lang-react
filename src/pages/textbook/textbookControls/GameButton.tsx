import React from 'react';
import { FC } from 'react';
import ClassLister from 'utils/ClassLister';
import classes from './GameButton.module.css';

const GameButton: FC<{ gameName: string }> = (props) => {
  const classList = ClassLister(classes);
  return (
    <button className={classList('control__button', 'game__button')}>
      <span>{props.gameName}</span>

      {/* TODO LINK TO GAME */}
    </button>
  );
};

export default GameButton;
