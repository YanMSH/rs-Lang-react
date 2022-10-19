import { ChangeEvent, useState } from 'react';

export const useInput = (validationFunc: (value: string) => boolean, defaultValue?: string) => {
  const [enteredValue, setEnteredValue] = useState<string>(defaultValue ? defaultValue : '');
  const [inputTouched, setInputTouched] = useState<boolean>(false);
  const enteredValueHandler: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setEnteredValue((event.target as HTMLInputElement | HTMLSelectElement).value);
  };

  const inputTouchedHandler: () => void = () => {
    setInputTouched(true);
  };

  const resetInput: () => void = () => {
    setEnteredValue('');
    setInputTouched(false);
  };

  const enteredValueIsValid: boolean = validationFunc(enteredValue);
  const inputHasError: boolean = !enteredValueIsValid && inputTouched;

  return {
    enteredValueHandler,
    inputTouchedHandler,
    resetInput,
    enteredValue,
    enteredValueIsValid,
    inputHasError,
  };
};
