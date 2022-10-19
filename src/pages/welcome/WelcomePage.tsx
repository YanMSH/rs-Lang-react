import React, { Fragment } from 'react';
import AboutUs from './AboutUs';
import WelcomeBanner from './WelcomeBanner';

const WelcomePage: React.FC = () => {
  return (
    <Fragment>
      <WelcomeBanner />
      <AboutUs />
    </Fragment>
  );
};

export default WelcomePage;
