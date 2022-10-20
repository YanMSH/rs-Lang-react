import Input from 'components/Input';
import { Requests, serverURL } from 'core/constants/loader-constants';
import { useInput } from 'core/hooks/useInput';
import useRequest from 'core/hooks/useRequest';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ClassLister from 'utils/ClassLister';
import { storeSet } from 'utils/LocalStorageFuncs';
import { emailValidation, passValidation } from 'utils/Validation';
import classes from './AuthForm.module.css';
import { AuthResponse } from './AuthTypes';

const AuthForm: React.FC = () => {
  const classList = ClassLister(classes);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isLoading, error, sendRequest: fetchAuth } = useRequest();
  const {
    enteredValueHandler: emailHandler,
    inputTouchedHandler: emailTouchedHandler,
    enteredValue: email,
    enteredValueIsValid: emailIsValid,
    inputHasError: emailInputHasError,
  } = useInput(emailValidation);

  const {
    enteredValueHandler: passHandler,
    inputTouchedHandler: passTouchedHandler,
    enteredValue: pass,
    enteredValueIsValid: passIsValid,
    inputHasError: passInputHasError,
  } = useInput(passValidation);

  const formIsValid = passIsValid && emailIsValid;

  const formSubmissionHandler = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!formIsValid) {
      console.log('FORM IS INVALID!');
      setShowErrorMessage(true);
      return;
    }
    const saveUserData = (data: AuthResponse) => {
      storeSet('userData', {
        name: data.name,
        userId: data.userId,
        token: data.token,
        refreshToken: data.refreshToken,
      });
    };
    fetchAuth(
      { url: serverURL + 'signin', method: Requests.post, body: { email: email, password: pass } },
      saveUserData
    );
  };
  const ErrorHandler = useCallback((): void => {
    if (error) {
      switch (error) {
        case '404':
          setErrorMessage('Пользователь с таким E-mail не найден!');
          break;
        case '403':
          setErrorMessage('Неправильный E-mail или пароль!');
          break;
        case '401':
          setErrorMessage('Неизвестная ошибка. Попробуйте еще раз.');
          break;
        case null:
          setErrorMessage(null);
      }
    } else {
      // TO DO Redirect to main page!
      setErrorMessage('Вы успешно вошли!');
    }
  }, [error]);
  useEffect(() => {
    ErrorHandler();
  }, [ErrorHandler, error]);
  return (
    <div className={classList('auth__form-container', 'form__container')}>
      <h2 className={classList('auth__title', 'form__title')}>Вход</h2>
      <form onSubmit={formSubmissionHandler} className={classList('auth__form', 'form')}>
        <Input
          name={'E-mail'}
          type={'email'}
          value={email}
          onChange={emailHandler}
          onFocus={emailTouchedHandler}
          hasError={emailInputHasError}
        />
        <Input
          name={'Пароль'}
          type={'password'}
          value={pass}
          onChange={passHandler}
          onFocus={passTouchedHandler}
          hasError={passInputHasError}
        />
        <button type="submit" className={classList('auth__submit', 'form__button')}>
          Войти
        </button>
      </form>
      <p className={classes.reg__hint}>
        Нет аккаунта?{' '}
        <span className={classes.reg__link}>
          <NavLink to="/registration">Зарегистрируйтесь!</NavLink>
        </span>
      </p>
      {isLoading && <p>Загрузка...</p>}
      {showErrorMessage && <p>Сообщение об ошибке</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default AuthForm;
