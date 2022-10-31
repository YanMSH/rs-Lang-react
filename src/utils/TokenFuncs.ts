import { inStore, storeGet } from './LocalStorageFuncs';

export const isTokenOutdated = (): boolean => {
  if (inStore('userData')) {
    const tokenRecievedDate = new Date(storeGet('tokenRecieved') as string);
    const nowDate = new Date(Date.now());
    console.log(
      'Time left:',
      14400000 - (nowDate.getTime() - tokenRecievedDate.getTime()) / 60000,
      'minutes'
    );

    if (nowDate.getTime() - tokenRecievedDate.getTime() > 14400000) {
      return true;
    }
  }

  return false;
};
