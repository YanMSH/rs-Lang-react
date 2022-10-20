import { storeGetToken } from './LocalStorageFuncs';

type FetchHeaders = {
  Authorization: string;
  Accept: string;
  'Content-Type': string;
};

export const headersBuilder = (): FetchHeaders | null => {
  const token = storeGetToken();
  return token
    ? {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    : null;
};
