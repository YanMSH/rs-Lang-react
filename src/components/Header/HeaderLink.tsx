import React from 'react';
import ClassLister from 'utils/ClassLister';
import classes from './HeaderLink.module.css';
const HeaderLink: React.FC<{
  iconPath: string;
  textContent: string;
  children?: JSX.Element;
  dropdown?: boolean;
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
      <img src={props.iconPath} />
      <span className={classes['nav-link-text-content']}>{props.textContent}</span>
      {props.children && <div className={classes['nav__dropdown-content']}>{props.children}</div>}
    </div>
  );
};

export default HeaderLink;
