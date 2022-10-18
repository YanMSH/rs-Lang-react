import React from 'react';
import ClassLister from 'utils/ClassLister';
import classes from './Footer.module.css';
import RSLogo from '../../assets/svg/rs-school-logo.svg';
import FooterGithubLink from './FooterGithubLink';
const Footer: React.FC = () => {
  const classList = ClassLister(classes);

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classList('footer__logo', 'footer__item')}>
          <a href="https://rs.school/js/">
            <img src={RSLogo} alt="" />
          </a>
        </div>
        <span className={classList('footer__year', 'footer__item')}>2022</span>
        <div className={classList('footer__githubs', 'footer__item')}>
          <FooterGithubLink name="YanMSH" />
          <FooterGithubLink name="Kristina2773" />
          <FooterGithubLink name="Sergey-98" />
          <FooterGithubLink name="glhvta" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
