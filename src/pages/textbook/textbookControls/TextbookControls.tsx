import { useAppDispatch, useAppSelector } from 'core/hooks/redux';
import React, { FC, useReducer, useState } from 'react';
import { textbookSlice } from 'store/reducers/TextbookSlice';
import ClassLister from 'utils/ClassLister';
import { LAST_PAGE, pageReducer, Pagination } from 'utils/Pagination';
import GameButton from './GameButton';
import TextbookControlButton from './TextbookControlButton';
import classes from './TextbookControls.module.css';
const TextbookControls: FC = () => {
  const { page } = useAppSelector((state) => state.textbookReducer);
  const { nextPage, prevPage, setPage } = textbookSlice.actions;
  const dispatch = useAppDispatch();

  // const initialPageState = 1;
  // const [currentPage, dispatchPageAction] = useReducer(pageReducer, initialPageState);

  // const nextPageHandler = () => {
  //   dispatchPageAction({ type: 'NEXT' });
  // };
  // const previousPageHandler = () => {
  //   dispatchPageAction({ type: 'PREVIOUS' });
  // };
  // const lastPageHandler = () => {
  //   dispatchPageAction({ type: 'LAST' });
  // };
  // const prelastPageHandler = () => {
  //   dispatchPageAction({ type: 'PRELAST' });
  // };
  // const nextNextPageHandler = () => {
  //   dispatchPageAction({ type: 'NEXTNEXT' });
  // };

  // const handlerPicker = (value: string | number) => {
  //   switch (value) {
  //     case 'Next':
  //       return nextPageHandler;
  //     case 'Previous':
  //       return previousPageHandler;
  //     case '...':
  //       return nextNextPageHandler;
  //     case LAST_PAGE:
  //       return lastPageHandler;
  //     case LAST_PAGE - 1:
  //       return prelastPageHandler;
  //     case currentPage + 1:
  //       return nextPageHandler;
  //   }
  //   return nextPageHandler;
  // };

  const handlerPicker = (value: string | number): (() => void) => {
    switch (value) {
      case 'Next':
        return () => dispatch(nextPage(1));
      case 'Previous':
        return () => dispatch(prevPage(1));
      case '...':
        return () => dispatch(nextPage(2));
      case LAST_PAGE:
        return () => dispatch(setPage(30));
      case LAST_PAGE - 1:
        return () => dispatch(setPage(29));
      case page + 1:
        return () => dispatch(nextPage(1));
    }
    return () => dispatch(nextPage(1));
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
        {Pagination(page).map((item) => {
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
