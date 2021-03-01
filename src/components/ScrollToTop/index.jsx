import React from 'react';

import './ScrollToTop.scss';

import arrowSvg from '../../assets/images/arrow.svg';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    showScroll && (
      <div className="scroll-top">
        <button onClick={scrollTop}>
          <img src={arrowSvg} alt="arrow svg" />
        </button>
      </div>
    )
  );
};

export default ScrollToTop;
