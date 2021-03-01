import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Iframe from 'react-iframe';

import './Trailer.scss';

const Trailer = ({ onClose, onVisiblePopup }) => {
  const popupRef = React.useRef();
  const escapeListener = React.useCallback((e) => {
    if (e.key === 'Escape') {
      onVisiblePopup();
    }
  }, []);
  const clickListener = React.useCallback(
    (e) => {
      if (!e.path.includes(popupRef.current)) {
        onClose(); // using optional chaining here, change to onClose && onClose(), if required
      }
    },
    [popupRef.current],
  );
  // Below is the 10 lines of code you need.
  React.useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  return (
    <div className="trailer-popup">
      <div ref={popupRef} className="trailer-popup-wrapper">
        <button onClick={onClose} className="trailer-popup-close-btn">
          <IoCloseSharp color="#ffffff" size="27px" />
        </button>
        <Iframe
          width="50%"
          height="720"
          src="https://www.youtube.com/embed/UCNv6HVajiU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></Iframe>
      </div>
    </div>
  );
};

export default Trailer;
