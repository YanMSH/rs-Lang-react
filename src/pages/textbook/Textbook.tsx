import { serverURL } from 'core/constants/loader-constants';
import useRequest from 'core/hooks/useRequest';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import ClassLister from 'utils/ClassLister';
import classes from './Textbook.module.css';
import TextbookCard from './TextbookCard';

type Word = {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
};

const Textbook: React.FC = () => {
  const classList = ClassLister(classes);
  const [words, setWords] = useState<Word[]>([]);
  const { isLoading, error, sendRequest: fetchWords } = useRequest();

  useEffect(() => {
    const getWords = (wordsArr: Word[]): void => {
      setWords(wordsArr);
    };
    fetchWords({ url: serverURL + 'words' }, getWords);
  }, [fetchWords]);
  console.log(words);
  return (
    <Fragment>
      <h2 className={classes.textbook__title}>Учебник</h2>
      <div className={classes.app__controls}>
        <div className={classList('group__controls', 'textbook__control-panel')}>
          <button className={classList('group__controls-button', 'control__button')}>1</button>
          <button className={classList('group__controls-button', 'control__button')}>2</button>
          <button className={classList('group__controls-button', 'control__button')}>3</button>
          <button className={classList('group__controls-button', 'control__button')}>4</button>
          <button className={classList('group__controls-button', 'control__button')}>5</button>
          <button className={classList('group__controls-button', 'control__button')}>6</button>
          <button className={classList('group__controls-button', 'control__button')}>7</button>
        </div>
        <div className={classes.game__controls}>
          <button className={classList('control__button', 'game__button', 'game-sprint')}>
            <svg
              width="32"
              height="23"
              viewBox="0 0 32 30"
              fill="#1c1c1c"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.678837 0.495468C1.2805 -0.029819 2.14033 -0.148786 2.86417 0.193106L31.0481 13.5054C31.6296 13.7801 32 14.3616 32 15C32 15.6384 31.6296 16.2199 31.0481 16.4946L2.86417 29.8069C2.14034 30.1488 1.2805 30.0298 0.678837 29.5045C0.162256 29.0535 -0.084344 28.3712 0.0258561 27.6977L2.10357 15L0.0258561 2.3023C-0.0843441 1.62883 0.162257 0.94647 0.678837 0.495468ZM4.14135 16.0834L2.24036 27.7011L29.1303 15L2.24036 2.29888L4.14135 13.9166H14.8724C15.4762 13.9166 15.9657 14.4016 15.9657 15C15.9657 15.5984 15.4762 16.0834 14.8724 16.0834H4.14135Z"
                fill="#F4EDED"
              />
            </svg>
            Спринт
          </button>
          <button className={classList('control__button', 'game__button', 'game-audiocall')}>
            Аудио-вызов
            <svg
              width="33"
              height="25"
              viewBox="0 0 33 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2809 0.423205C14.6482 0.58572 14.8852 0.949629 14.8852 1.35134V23.6791C14.8852 24.0808 14.6482 24.4447 14.2809 24.6072C13.9135 24.7698 13.4848 24.7003 13.1876 24.4301L6.03532 17.928H2.3681C1.06023 17.928 0 16.8678 0 15.5599V9.47053C0 8.16267 1.06023 7.10243 2.3681 7.10243H6.03532L13.1876 0.60038C13.4848 0.330158 13.9135 0.26069 14.2809 0.423205ZM12.8554 3.64557L7.11038 8.8683C6.92357 9.03813 6.68016 9.13223 6.42769 9.13223H2.3681C2.18126 9.13223 2.0298 9.28369 2.0298 9.47053V15.5599C2.0298 15.7468 2.18126 15.8982 2.3681 15.8982H6.42769C6.68016 15.8982 6.92357 15.9923 7.11038 16.1622L12.8554 21.3849V3.64557Z"
                fill="#F4EDED"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.0187 5.0547C21.1522 5.006 21.2967 4.99564 21.4358 5.0248C21.5749 5.05395 21.703 5.12146 21.8057 5.21967L24.925 8.20449L29.1524 7.32646C29.2915 7.29755 29.4358 7.30811 29.5691 7.35699C29.7024 7.40582 29.8195 7.49097 29.9069 7.60285C29.9944 7.71472 30.0488 7.84882 30.0641 7.99C30.0794 8.13116 30.0548 8.27378 29.9932 8.40176L28.1195 12.2917L30.2606 16.0398C30.3311 16.1631 30.3657 16.3036 30.3605 16.4456C30.3553 16.5876 30.3104 16.7252 30.2311 16.843C30.1517 16.9608 30.0409 17.0541 29.9113 17.1122C29.7816 17.1703 29.6384 17.191 29.4976 17.1719L25.2187 16.5912L22.3147 19.787C22.2191 19.8919 22.0962 19.9681 21.9597 20.0069C21.8232 20.0457 21.6785 20.0456 21.5421 20.0066C21.4056 19.9674 21.2828 19.891 21.1875 19.7858C21.0922 19.6806 21.0283 19.551 21.0028 19.4113L20.2333 15.1617L16.2957 13.3885C16.166 13.3302 16.0553 13.2367 15.9759 13.1187C15.8966 13.0007 15.852 12.8629 15.847 12.7208C15.842 12.5787 15.877 12.438 15.9479 12.3147C16.0187 12.1915 16.1227 12.0905 16.248 12.0233L20.0508 9.97898L20.522 5.68699C20.5376 5.54574 20.5923 5.41165 20.6801 5.29991C20.7679 5.18816 20.8852 5.10322 21.0187 5.0547ZM21.8676 7.38641L21.5207 10.5423C21.5072 10.6648 21.4641 10.7822 21.3953 10.8845C21.3264 10.9867 21.2337 11.0706 21.1252 11.1291L18.3279 12.6335L21.2224 13.9386C21.3349 13.9893 21.4335 14.0666 21.5096 14.1638C21.5856 14.2611 21.6369 14.3754 21.6589 14.4969L22.2261 17.6213L24.3613 15.2714C24.4443 15.18 24.5483 15.1103 24.6642 15.0681C24.7802 15.0259 24.9046 15.0124 25.0269 15.029L28.1741 15.4558L26.5979 12.6988C26.5367 12.5915 26.5025 12.471 26.4982 12.3477C26.494 12.2243 26.5198 12.1017 26.5734 11.9905L27.9517 9.13097L24.8429 9.77672C24.7222 9.8017 24.5972 9.79698 24.4787 9.76298C24.3602 9.72898 24.2518 9.66671 24.1627 9.58153L21.8673 7.38546L21.8676 7.38641Z"
                fill="#F4EDED"
              />
            </svg>
          </button>
        </div>
        <div className={classList('page__controls', 'textbook__control-panel')}></div>
      </div>
      <div className={classes.cards__container}>
        {words.map((item: Word) => {
          return (
            <TextbookCard
              key={item.id}
              word={item.word}
              transcription={item.transcription}
              wordTranslate={item.wordTranslate}
              textMeaning={item.textMeaning}
              textMeaningTranslate={item.textMeaningTranslate}
              textExample={item.textExample}
              textExampleTranslate={item.textExampleTranslate}
              imagePath={item.image}
              audioPath={item.audio}
              audioMeaningPath={item.audioMeaning}
              audioExamplePath={item.audioExample}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Textbook;
