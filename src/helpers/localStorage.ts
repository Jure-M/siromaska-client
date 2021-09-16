export const setTokenToLocalStorage = (token: string) => {
  window.localStorage.setItem('axa2xa', JSON.stringify(token));
};

export const removeTokenFromLocalStorage = () => {
  window.localStorage.removeItem('axa2xa');
};

export const getTokenFromLocalStorage = (): string | null =>
  JSON.parse(window.localStorage.getItem('axa2xa') as string);
