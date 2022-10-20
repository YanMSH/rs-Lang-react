//DEPRECATED
// USE HOOK useRequest INSTEAD

import { Requests, serverURL } from 'core/constants/loader-constants';
import { AuthResponse } from 'pages/auth/AuthTypes';
import { storeSet } from 'utils/LocalStorageFuncs';

export async function AuthUser(email: string, password: string): Promise<void> {
  const response = await fetch(serverURL + 'signin', {
    method: Requests.post,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    const authResponseData: AuthResponse = await response.json();
    storeSet('userData', {
      name: authResponseData.name,
      userId: authResponseData.userId,
      token: authResponseData.token,
      refreshToken: authResponseData.refreshToken,
    });
  }
}
