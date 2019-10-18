import React from 'react';

export const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const onScroll = () => {
    const scrollTop = document.body !== undefined ? document.body.scrollTop : 0;
    const isScrolledCurrent = (window.pageYOffset || scrollTop) > 0;

    setIsScrolled(isScrolledCurrent);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


  return isScrolled;
};
