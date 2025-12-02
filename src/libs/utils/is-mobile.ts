// import { useEffect, useState } from 'react';

// This method handles logic for the changing of screen-widths
// As this doesn't really need to be dynamic, the bottom method is opted for
// export const useMobile = () => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   function handleWindowSizeChange() {
//     setScreenWidth(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleWindowSizeChange);
//     return () => {
//       window.removeEventListener('resize', handleWindowSizeChange);
//     };
//   }, []);

//   return screenWidth <= 768;
// };

export const isMobile = () => window.innerWidth <= 768;
