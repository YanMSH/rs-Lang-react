import Input from 'components/Input';
import { Requests, serverURL } from 'core/constants/loader-constants';
import { useInput } from 'core/hooks/useInput';
import useRequest from 'core/hooks/useRequest';
import { userRegData } from 'pages/auth/AuthTypes';
import React, { useCallback, useEffect, useState } from 'react';
import ClassLister from 'utils/ClassLister';
import { emailValidation, passValidation, userNameValidation } from 'utils/Validation';
import classes from './RegistrationForm.module.css';

const RegistrationForm: React.FC = () => {
  const classList = ClassLister(classes);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const { isLoading, error, sendRequest: fetchRegistration } = useRequest();
  const {
    enteredValueHandler: userNameHandler,
    inputTouchedHandler: userNameTouchedHandler,
    enteredValue: userName,
    enteredValueIsValid: userNameIsValid,
    inputHasError: userNameInputHasError,
  } = useInput(userNameValidation);

  const {
    enteredValueHandler: passHandler,
    inputTouchedHandler: passTouchedHandler,
    enteredValue: pass,
    enteredValueIsValid: passIsValid,
    inputHasError: passInputHasError,
  } = useInput(passValidation);

  const {
    enteredValueHandler: passConfirmHandler,
    inputTouchedHandler: passConfirmTouchedHandler,
    enteredValue: passConfirm,
    enteredValueIsValid: passConfirmIsValid,
    inputHasError: passConfirmInputHasError,
  } = useInput(passValidation);

  const {
    enteredValueHandler: emailHandler,
    inputTouchedHandler: emailTouchedHandler,
    enteredValue: email,
    enteredValueIsValid: emailIsValid,
    inputHasError: emailInputHasError,
  } = useInput(emailValidation);
  const passIsConfirmed = pass === passConfirm;

  const formIsValid =
    userNameIsValid && passIsValid && passConfirmIsValid && emailIsValid && passIsConfirmed;
  const formSubmissionHandler = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!formIsValid) {
      console.log('FORM IS INVALID!');
      setShowErrorMessage(true);
      return;
    }

    const handleRegistrationResponse = (data: userRegData) => {
      console.log('data:', data);
      if (data) {
        setErrorMessage(null);
      } else {
        console.log(error);
        switch (error) {
          case '417':
            setErrorMessage('Пользователь с таким Email уже зарегистрирован!');
            break;
          case '401':
            setErrorMessage('Неизвестная ошибка. Попробуйте еще раз.');
            break;
        }
      }
    };
    fetchRegistration(
      {
        url: serverURL + 'users',
        method: Requests.post,
        body: { name: userName, email: email, password: pass },
      },
      handleRegistrationResponse
    );
    setShowErrorMessage(false);
  };

  const ErrorHandler = useCallback((): void => {
    if (error) {
      switch (error) {
        case '417':
          setErrorMessage('Пользователь с таким Email уже зарегистрирован!');
          break;
        case '401':
          setErrorMessage('Неизвестная ошибка. Попробуйте еще раз.');
          break;
      }
    } else {
      // TO DO Redirect to auth page or automatise auth and then redirect!
      setErrorMessage(null);
    }
  }, [error]);
  useEffect(() => {
    ErrorHandler();
  }, [ErrorHandler, error]);

  return (
    <div className={classList('form__container', 'reg__form-container')}>
      <h2 className={classList('reg__title', 'form__title')}>Регистрация</h2>
      <form onSubmit={formSubmissionHandler} className={classList('reg__form', 'form')}>
        <Input
          name={'Имя'}
          type={'text'}
          value={userName}
          onChange={userNameHandler}
          onFocus={userNameTouchedHandler}
          hasError={userNameInputHasError}
        />
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
        <Input
          name={'Подтверждение пароля'}
          type={'password'}
          value={passConfirm}
          onChange={passConfirmHandler}
          onFocus={passConfirmTouchedHandler}
          hasError={passConfirmInputHasError}
        />
        <button type="submit" className={classList('reg__submit', 'form__button')}>
          Зарегистрироваться
        </button>
        {isLoading && <p>Загрузка...</p>}
        {showErrorMessage && <p>Сообщение об ошибке</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
