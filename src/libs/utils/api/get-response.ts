import { setSessionItem } from './set-session-item.js';

// Unused util, but looks nice
export const getResponse = async (
  url: string,
  method: string,
  callback?: () => void,
  groupKey?: string,
  groupObjects?: boolean,
) => {
  await fetch(url, { method: method }).then((response) => {
    response
      .json()
      .then((data) => {
        Array.isArray(data)
          ? setSessionItem(`response-${groupKey}`, data)
          : groupObjects
          ? setSessionItem(`response-${groupKey}`, data)
          : Object.keys(data).filter((key) => {
              setSessionItem(`response-${key}`, data[key]);
            });
      })
      .then(() => {
        callback ? callback() : () => {};
      })
      .catch((error: Error) => {
        console.log(error);
      });
  });
};
