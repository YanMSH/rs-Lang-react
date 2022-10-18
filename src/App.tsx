import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import AboutUs from 'pages/welcome/AboutUs';
import WelcomeBanner from 'pages/welcome/WelcomeBanner';
import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <WelcomeBanner />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
