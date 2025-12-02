export const useElementWidth = (element: string) =>
  (document.getElementById(element) as HTMLElement | null)?.clientWidth;
