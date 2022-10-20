import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import AuthForm from 'pages/auth/AuthForm';
import RegistrationForm from 'pages/registration/RegistrationForm';
import Textbook from 'pages/textbook/Textbook';
import WelcomePage from 'pages/welcome/WelcomePage';
import React from 'react';
import classes from './App.module.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/textbook" element={<Textbook />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
