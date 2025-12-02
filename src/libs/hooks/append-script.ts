export const appendScript = (url: string) => {
  new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      resolve();
    };

    setTimeout(resolve, 2000);

    if (document.head.childNodes[0])
      document.head.insertBefore(script, document.head.childNodes[0]);
  });
};
