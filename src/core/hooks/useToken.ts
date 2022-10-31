import { Requests, serverURL } from 'core/constants/loader-constants';
import { StoreAuthData, userRefreshedTokens } from 'pages/auth/AuthTypes';
import { useState } from 'react';
import { inStore, storeGet, storeSet } from 'utils/LocalStorageFuncs';
import { isTokenOutdated } from 'utils/TokenFuncs';
import useAxios from './useAxios';

export const useToken = () => {
  const [tokenIsOutdated, setIsOutdated] = useState<boolean>(isTokenOutdated());
  const { sendRequest: sendRefreshRequest } = useAxios();

  if (inStore('userData') && tokenIsOutdated) {
    const userData = storeGet('userData') as StoreAuthData;
    const saveNewToken = (data: userRefreshedTokens) => {
      const newUserData = { ...userData };
      newUserData.refreshToken = data.refreshToken;
      newUserData.token = data.token;
      storeSet('userData', newUserData);
    };
    sendRefreshRequest(
      {
        url: serverURL + `users/${userData.userId}/tokens`,
        method: Requests.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData.refreshToken}`,
        },
      },
      saveNewToken
    );
    setIsOutdated(false);
  }
  return { tokenIsOutdated };
};
