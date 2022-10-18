import React from 'react';
import ClassLister from 'utils/ClassLister';
import classes from './AboutPerson.module.css';

const AboutPerson: React.FC<{
  name: string;
  description: string;
  pic: string;
  mentor?: boolean;
}> = (props) => {
  const classList = ClassLister(classes);

  return (
    <div
      className={
        props.mentor ? classList('about-us__card', 'card__mentor') : classList('about-us__card')
      }
    >
      <div className={classList('card__pic-container')}>
        <img src={props.pic} className={classes.card__pic} />
      </div>
      <div className={classList('card__text')}>
        <span className={classList('card__text-name')}>{props.name}</span>: {props.description}.
      </div>
    </div>
  );
};

export default AboutPerson;
