import React from 'react';
import { NavLink } from 'react-router-dom';
import ClassLister from 'utils/ClassLister';
import classes from './HeaderLink.module.css';
const HeaderLink: React.FC<{
  iconPath: string;
  textContent: string;
  children?: JSX.Element;
  dropdown?: boolean;
  linkTo?: string;
}> = (props) => {
  const classList = ClassLister(classes);

  return (
    <div
      className={
        props.dropdown
          ? classList('nav__dropdown-link')
          : classList('header__nav-point', 'nav__dropdown')
      }
    >
      <NavLink to={props.linkTo || '#'}>
        <img src={props.iconPath} />
        <span className={classes['nav-link-text-content']}>{props.textContent}</span>
      </NavLink>
      {props.children && <div className={classes['nav__dropdown-content']}>{props.children}</div>}
    </div>
  );
};

export default HeaderLink;
