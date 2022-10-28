import { useAppDispatch, useAppSelector } from 'core/hooks/redux';
import React, { FC } from 'react';
import { textbookSlice } from 'store/reducers/TextbookSlice';
import ClassLister from 'utils/ClassLister';
import { groups, LAST_PAGE, Pagination } from 'utils/Pagination';
import GameButton from './GameButton';
import TextbookControlButton from './TextbookControlButton';
import classes from './TextbookControls.module.css';
const TextbookControls: FC = () => {
  const { page, group } = useAppSelector((state) => state.textbookReducer);
  const { nextPage, prevPage, setPage, setGroup } = textbookSlice.actions;
  const dispatch = useAppDispatch();

  const handlerPicker = (value: string | number): (() => void) => {
    switch (value) {
      case '→':
        return () => dispatch(nextPage(1));
      case '←':
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
  return (
    <div className={classes.app__controls}>
      <div className={classList('group__controls', 'textbook__control-panel', 'controls')}>
        {groups.map((item) => {
          return (
            <TextbookControlButton
              text={item.toString()}
              key={item}
              onClick={() => dispatch(setGroup(item))}
              disabled={item === group}
            />
          );
        })}
      </div>
      <div className={classes.game__controls}>
        <GameButton gameName="Спринт" />
        <GameButton gameName="Аудио-вызов" />
      </div>
      <div className={classList('page__controls', 'textbook__control-panel', 'controls')}>
        {Pagination(page).map((item) => {
          return (
            <TextbookControlButton
              text={item.toString()}
              key={item}
              onClick={handlerPicker(item)}
              disabled={item === page}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TextbookControls;
