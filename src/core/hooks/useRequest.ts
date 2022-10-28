import { useCallback, useState } from 'react';

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const sendRequest = useCallback(
    async (
      options: { url: string; method?: string; body?: { [field: string]: string } },
      applyData: (data: any) => void
      //TODO: CHECK THE TYPINGS OF THIS FUNCTION THEN ADD NO-EXPLICIT-ANY in .eslintrc.json!
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(options.url, {
          method: options.method ? options.method : 'GET',
          body: options.body ? JSON.stringify(options.body) : null,
          headers: options.method
            ? { Accept: 'application/json', 'Content-Type': 'application/json' }
            : {},
        });

        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        console.log('response:', response);
        const data = await response.json();

        applyData(data);
      } catch (err: unknown) {
        if ((err as Error).message) {
          setError((err as Error).message);
        } else {
          setError('Something went wrong');
        }
      }
      setIsLoading(false);
    },
    []
  );
  return { isLoading, error, sendRequest };
};

export default useRequest;
