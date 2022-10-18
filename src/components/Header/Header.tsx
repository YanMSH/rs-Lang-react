import React, { Fragment } from 'react';

import classes from './Header.module.css';
import playIcon from '../../assets/svg/play-icon.svg';
import learnIcon from '../../assets/svg/learn-icon.svg';
import sprintIcon from '../../assets/svg/sprint-icon.svg';
import audiocallIcon from '../../assets/svg/audiocall-icon.svg';
import statsIcon from '../../assets/svg/stats-icon.svg';
import loginIcon from '../../assets/svg/login-icon.svg';
import HeaderLink from './HeaderLink';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <h1 className={classes.header__title}>
          <a className={classes['header__title-link']} href="#">
            rs-Lang
          </a>
        </h1>
        <nav className={classes.header__nav}>
          <HeaderLink iconPath={learnIcon} textContent="Учиться" />
          <HeaderLink iconPath={playIcon} textContent="Играть">
            <Fragment>
              <HeaderLink iconPath={sprintIcon} textContent="Спринт" dropdown={true} />
              <HeaderLink iconPath={audiocallIcon} textContent="Аудио-вызов" dropdown={true} />
            </Fragment>
          </HeaderLink>
          <HeaderLink iconPath={statsIcon} textContent="Статистика" />
          <HeaderLink iconPath={loginIcon} textContent="Войти" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
