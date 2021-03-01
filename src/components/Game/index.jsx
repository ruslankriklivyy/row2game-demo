import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import { Button, Trailer } from '../../components';

import './Game.scss';

const Game = ({ links, onSelectLinkBtn, visiblePopup, onVisiblePopup, onClosePopup }) => {
  return (
    <section className="game section">
      <div className="game__block">
        <Fade left>
          <div className="game__info">
            <h2 className="game__title">Settle Down</h2>
            <p className="game__text">
              Settle Down is coming to PS4, X1 and PC early 2021. Settle Down is coming to PS4
              Settle Down is coming to PS4, X1 and PC early 2021. Settle Down is coming to PS4
            </p>
            <button onClick={onVisiblePopup} className="game-btn">
              Watch Trailer
            </button>
            <Link to="/settledown">
              <Button onClick={() => onSelectLinkBtn(links.indexOf('SETTLE DOWN'))}>
                More info
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
      {visiblePopup && <Trailer onVisiblePopup={onVisiblePopup} onClose={onClosePopup} />}
    </section>
  );
};

export default Game;
