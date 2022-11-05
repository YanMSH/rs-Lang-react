import React from 'react';
import ClassLister from 'utils/ClassLister';
import classes from './WelcomeBanner.module.css';
import welcomeBannerPic from '../../assets/svg/welcome-page-banner.svg';
import { NavLink } from 'react-router-dom';

const WelcomeBanner: React.FC = () => {
  const classList = ClassLister(classes);

  return (
    <section className={classes.welcome__banner}>
      <div className={classList('welcome__text-block', 'welcome__banner-half')}>
        <div className={classList('welcome__text-title', 'block__title')}>Приветствую!</div>
        <div className={classList('welcome__text-desc')}>
          Это наше приложение для изучения английского языка rs-Lang! В rs-Lang есть:
          <ul className={classList('welcome__text-list')}>
            <li className={classList('welcome__text-list-item')}>Удобный учебник</li>
            <li className={classList('welcome__text-list-item')}>
              Две мини игры: Спринт и Аудио-вызов
            </li>
            <li className={classList('welcome__text-list-item')}>
              Статистика изученных и сложных слов
            </li>
          </ul>
        </div>
        <button className={classList('welcome__banner-reg-link', 'welcome__banner-btn')}>
          <NavLink to="/registration">Регистрация</NavLink>
        </button>
      </div>
      <div className={classList('welcome__banner-picture', 'welcome__banner-half')}>
        <div className={classList('welcome__banner-picture-title')}>
          <img src={welcomeBannerPic} />
        </div>
        <button className={classList('welcome__banner-auth-link', 'welcome__banner-btn')}>
          <NavLink to="/auth">Войти</NavLink>
        </button>
      </div>
    </section>
  );
};

export default WelcomeBanner;
