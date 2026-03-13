// Unused util, but looks nice
export const setSessionItem = (id: string, data: [] | {}) => {
  sessionStorage.setItem(id, JSON.stringify(data));
};
