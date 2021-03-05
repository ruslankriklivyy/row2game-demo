import React from 'react';
import Fade from 'react-reveal/Fade';

import { Carousel, Subscribe } from '../../components';
import settleDownPng from '../../assets/images/game-screen-2.png';

import './SettleDown.scss';

const SettleDown = () => {
  return (
    <div className="settle-down">
      <img className="settle-down-screen" src={settleDownPng} alt="game screen" />

      <Fade bottom>
        <div className="settle-down-main">
          <h2 className="title">Settle Down</h2>
          <div className="settle-down-info">
            <p>
              Hi, my name is "Name." Last night I met two guys who asked me to to write me a short
              review of the game, and they shoved me an awful crumpled hundred dollar bill with
              their number on it and shouted as they ran away that I could write anything anything.
              I asked them over the phone what the game is, and all I got was, and I quote: "Kind of
              like a first-person action, retrofuturistic, space, a fucking revolver, planet with
              reptiloids, (indecipherable sounds) khulh, non-variability, intergalactic colonies,
              sex, drugs and SLOOMOOO." I couldn't get this nonsense together in my head, so maybe
              someone else can do it. I'm writing this, stupidly, because I'm kind of embarrassed
              not to do something when I'm even if it's against my will. And since I can write
              whatever I want. they'll probably cut out everything else. Jesus, what the fuck am I
              doing with my life, tomorrow. I'm definitely going to look for a job tomorrow.
            </p>
          </div>
        </div>
      </Fade>
      <Carousel settleDownPage />
      <Subscribe />
    </div>
  );
};

export default SettleDown;
