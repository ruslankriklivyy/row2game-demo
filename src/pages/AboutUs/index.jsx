import React from 'react';
import Fade from 'react-reveal/Fade';

import gameScreen from '../../assets/images/game-screen-2.png';

import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us">
      <img className="about-us-image" src={gameScreen} alt="game screen" />
      <div className="container">
        <Fade bottom>
          <div className="about-us__main">
            <h2 className="title">About Row2Game</h2>
            <div className="about-us__info">
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
                <br />
                Plague Tale: Innocence, Vampyr, Farming Simulator, Call of Cthulhu, Insurgency:
                Sandstorm, MudRunner, GreedFall, The Surge 2, SnowRunner…) that have become
                benchmark titles worldwide, available both in store and for download across the
                world. Focus publishes games on all major platforms, consoles and PC. Sandstorm,
                MudRunner, GreedFall, The Surge 2, SnowRunner…) that have become benchmark titles
                worldwide, available both in store and for download across the world. Focus
                publishes games on all major platforms, consoles and PC. Row2Game is a French
                publisher based in Paris, France. Known for the quality, diversity and originality
                of its catalogue, Focus has published and distributed original titles (A Plague
                Tale: Innocence, Vampyr, Farming Simulator, Call of Cthulhu, Insurgency: Sandstorm,
                MudRunner, GreedFall, The Surge 2, SnowRunner…) that have become benchmark titles
                worldwide, available both in store and for download across the world. Focus
                publishes games on all major platforms, consoles and PC. Sandstorm, MudRunner,
                GreedFall, The Surge 2, SnowRunner…)
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutUs;
