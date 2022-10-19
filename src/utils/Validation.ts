const emailValidationPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailValidation = (email: string) => emailValidationPattern.test(email);

export const passValidation = (value: string): boolean => {
  return value.trim().length > 6;
};

export const passConfirmValidation = (pass1: string, pass2: string) => {
  return pass1 === pass2;
};

export const userNameValidation = (userName: string) => {
  return userName.trim().length > 2;
};
