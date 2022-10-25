import React, { FC, useReducer, useState } from 'react';
import ClassLister from 'utils/ClassLister';
import { LAST_PAGE, pageReducer, Pagination } from 'utils/Pagination';
import GameButton from './GameButton';
import TextbookControlButton from './TextbookControlButton';
import classes from './TextbookControls.module.css';
const TextbookControls: FC = () => {
  const initialPageState = 1;
  const [currentPage, dispatchPageAction] = useReducer(pageReducer, initialPageState);

  const nextPageHandler = () => {
    dispatchPageAction({ type: 'NEXT' });
  };
  const previousPageHandler = () => {
    dispatchPageAction({ type: 'PREVIOUS' });
  };
  const lastPageHandler = () => {
    dispatchPageAction({ type: 'LAST' });
  };
  const prelastPageHandler = () => {
    dispatchPageAction({ type: 'PRELAST' });
  };
  const nextNextPageHandler = () => {
    dispatchPageAction({ type: 'NEXTNEXT' });
  };

  const handlerPicker = (value: string | number) => {
    switch (value) {
      case 'Next':
        return nextPageHandler;
      case 'Previous':
        return previousPageHandler;
      case '...':
        return nextNextPageHandler;
      case LAST_PAGE:
        return lastPageHandler;
      case LAST_PAGE - 1:
        return prelastPageHandler;
      case currentPage + 1:
        return nextPageHandler;
    }
    return nextPageHandler;
  };
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
          return (
            <TextbookControlButton
              text={item.toString()}
              key={item}
              onClick={handlerPicker(item)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TextbookControls;
