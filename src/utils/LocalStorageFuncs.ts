// DEPRECATED
// USE HOOK useRequest

import { StoreAuthData } from 'pages/auth/AuthTypes';

export const inStore = (fieldName: string): boolean => {
  return !!localStorage.getItem(fieldName);
};
export const storeSet = (
  fieldName: string,
  value: string | number | boolean | StoreAuthData | Date
): void => {
  localStorage.setItem(fieldName, JSON.stringify(value));
};
export const storeGet = (fieldName: string): string | number | null | StoreAuthData | Date => {
  if (inStore(fieldName)) {
    return JSON.parse(localStorage.getItem(fieldName) as string);
  } else {
    return null;
  }
};
export const storeRemove = (fieldName: string): void => {
  localStorage.removeItem(fieldName);
};

export const storeGetToken = (): string | null => {
  const userData = storeGet('userData');
  if (userData) {
    if (userData.hasOwnProperty('token')) {
      return (userData as StoreAuthData).token;
    }
  }
  return null;
};
