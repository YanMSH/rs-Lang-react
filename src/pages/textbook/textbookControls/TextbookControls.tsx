import React, { FC, useState } from 'react';
import ClassLister from 'utils/ClassLister';
import Pagination from 'utils/Pagination';
import GameButton from './GameButton';
import TextbookControlButton from './TextbookControlButton';
import classes from './TextbookControls.module.css';
const TextbookControls: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const classList = ClassLister(classes);
  const groups = ['1', '2', '3', '4', '5', '6', '7'];
  return (
    <div className={classes.app__controls}>
      <div className={classList('group__controls', 'textbook__control-panel')}>
        {groups.map((item) => {
          return <TextbookControlButton text={item} key={item} />;
        })}
      </div>
      <div className={classes.game__controls}>
        <GameButton gameName="Спринт" />
        <GameButton gameName="Аудио-вызов" />
      </div>
      <div className={classList('page__controls', 'textbook__control-panel')}>
        {Pagination(currentPage).map((item) => {
          return <TextbookControlButton text={item.toString()} key={item} />;
        })}
      </div>
    </div>
  );
};
export default TextbookControls;
