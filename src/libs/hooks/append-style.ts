export const appendStyle = (url: string) => {
  new Promise<void>((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    link.onload = () => {
      resolve();
    };

    link.onerror = () => {
      resolve();
    };

    setTimeout(resolve, 2000);
    if (document.head.childNodes[0])
      document.head.insertBefore(link, document.head.childNodes[0]);
  });
};
