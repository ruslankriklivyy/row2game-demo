import React from 'react';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import { Game, Carousel, Button, Subscribe } from '../components';

const Home = ({ links, onSelectLinkBtn, visiblePopup, setVisiblePopup }) => {
  const onVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onClosePopup = () => {
    setVisiblePopup(false);
  };

  return (
    <div>
      <Game
        links={links}
        onSelectLinkBtn={onSelectLinkBtn}
        visiblePopup={visiblePopup}
        onClosePopup={onClosePopup}
        onVisiblePopup={onVisiblePopup}
      />

      <div className="about">
        <div className="container">
          <h2 className="title">About Row2Game</h2>
          <div className="about__info">
            <Fade bottom>
              <p>
                Row2Game is a French publisher based in Paris, France. Known for the quality,
                diversity and originality of its catalogue, Focus has published and distributed
                original titles (A Plague Tale: Innocence, Vampyr, Farming Simulator, Call of
                Cthulhu, Insurgency: Sandstorm, MudRunner, GreedFall, The Surge 2, SnowRunner…) that
                have become benchmark titles worldwide, available both in store and for download
                across the world. Focus publishes games on all major platforms, consoles and PC.
                Sandstorm, MudRunner, GreedFall, The Surge 2, SnowRunner…) that have become
                benchmark titles worldwide, available both in store and for download across the
                world. Focus publishes games on all major platforms, consoles and PC.
              </p>
            </Fade>
            <Link to="/aboutus">
              <Button onClick={() => onSelectLinkBtn(links.indexOf('About Us'))}>More info</Button>
            </Link>
          </div>
        </div>
      </div>

      <Carousel />
      <Subscribe />
      <div className="settle-down-promo">
        <div className="container">
          <h2 className="title">Settle Down</h2>
          <Fade bottom>
            <div className="settle-down-promo__about">
              <p>
                Settle Down перенесет вас в мир, разрушенный метеоритами, где единственным спасением
                и источником существования выживших есть оливин – минерал, добываемый из метеоритов.
                Он стал единственным источником энергии в суровых условиях нового мира. В игре есть
                три основные фракции – ученые, правительство, шахтеры. Ученые занимаются разработкой
                новых технологий на базе нового минерала. Занимаясь разработкой технологий на базе
                оливина,ученые преследуют главную цель – автоматизировать и упростить жизнь
                человечества.
              </p>
              <Link to="/settledown">
                <Button onClick={() => onSelectLinkBtn(links.indexOf('SETTLE DOWN'))}>
                  More Info
                </Button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
