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
              Settle Down перенесет вас в мир, разрушенный метеоритами, где единственным спасением и
              источником существования выживших есть оливин – минерал, добываемый из метеоритов. Он
              стал единственным источником энергии в суровых условиях нового мира. В игре есть три
              основные фракции – ученые, правительство, шахтеры. Ученые занимаются разработкой новых
              технологий на базе нового минерала. Занимаясь разработкой технологий на базе
              оливина,ученые преследуют главную цель – автоматизировать и упростить жизнь
              человечества.Settle Down перенесет вас в мир, разрушенный метеоритами, где
              единственным спасением и источником существования выживших есть оливин – минерал,
              добываемый из метеоритов. Он стал единственным источником энергии в суровых условиях
              нового мира. В игре есть три основные фракции – ученые, правительство, шахтеры.
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
