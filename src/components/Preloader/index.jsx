import React from 'react';

import './Preloader.scss';

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="preloader">
        <div className="circ">
          <div className="load">Loading . . . </div>
          <div className="hands"></div>
          <div className="body"></div>
          <div className="head">
            <div className="eye"></div>
          </div>
        </div>
        {/* <div class="divider" aria-hidden="true"></div>
        <p class="loading-text" aria-label="Loading">
          <span class="letter" aria-hidden="true">
            L
          </span>
          <span class="letter" aria-hidden="true">
            o
          </span>
          <span class="letter" aria-hidden="true">
            a
          </span>
          <span class="letter" aria-hidden="true">
            d
          </span>
          <span class="letter" aria-hidden="true">
            i
          </span>
          <span class="letter" aria-hidden="true">
            n
          </span>
          <span class="letter" aria-hidden="true">
            g
          </span>
        </p> */}
      </div>
    </div>
  );
};

export default Preloader;
