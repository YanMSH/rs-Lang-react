import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Textbook from 'pages/textbook/Textbook';
import WelcomePage from 'pages/welcome/WelcomePage';
import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Textbook />
      <Footer />
    </div>
  );
}

export default App;
