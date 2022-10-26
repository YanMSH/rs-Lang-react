import { serverURL } from 'core/constants/loader-constants';
import useRequest from 'core/hooks/useRequest';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import ClassLister from 'utils/ClassLister';
import GameButton from './textbookControls/GameButton';
import { AudioCallIcon } from './GameIcons';
import classes from './Textbook.module.css';
import TextbookCard from './TextbookCard';
import TextbookControls from './textbookControls/TextbookControls';
import { useAppSelector } from 'core/hooks/redux';

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
      <TextbookControls />
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
