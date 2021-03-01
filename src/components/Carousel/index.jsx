import React from 'react';
import Carousel from 'react-elastic-carousel';

import screen1 from '../../assets/images/game-screen.png';
import screen2 from '../../assets/images/game-screen-2.png';

import './Carousel.scss';

function Slider({ settleDownPage }) {
  return (
    <div className="carousel">
      <h2 className="title">{!settleDownPage ? 'SCREENSHOTS' : 'SCREENSHOTS / GAMEPLAY'}</h2>
      <Carousel
        className="carousel-wrapper"
        showArrows={true}
        isRTL={true}
        enableMouseSwipe={false}
        itemsToShow={1}>
        <div className="carousel__item">
          <img src={screen1} alt="screen game" />
        </div>
        <div className="carousel__item">
          <img src={screen2} alt="screen game" />
        </div>
        <div className="carousel__item">
          <img src={screen1} alt="screen game" />
        </div>
        <div className="carousel__item">
          <img src={screen2} alt="screen game" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
