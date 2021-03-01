import React from 'react';
import Fade from 'react-reveal/Fade';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';

import { Subscribe } from '../../components';

import gamePng from '../../assets/images/game-screen-2.png';
import worker1 from '../../assets/images/worker-2.png';
import worker2 from '../../assets/images/worker-3.png';
import worker3 from '../../assets/images/worker-6.png';
import worker4 from '../../assets/images/worker-5.png';

import './OurTeam.scss';

const OurTeam = () => {
  return (
    <>
      <section class="our-team">
        <img class="our-team-img" src={gamePng} alt="game ong" />
        <div class="container">
          <div class="inner">
            <h2 class="title">Our Team</h2>
          </div>

          <div class="our-team__info">
            <Fade left>
              <div>
                <p class="our-team__info-text">
                  Focus Home Interactive is a French publisher based in Paris, France. Known for the
                  quality, diversity and originality of its catalogue, Focus has published and
                  distributed original titles (A Plague Tale: Innocence, Vampyr, Farming Simulator,
                  Call of Cthulhu, Insurgency: Sandstorm, MudRunner, GreedFall, The Surge 2,
                  SnowRunner…) that have become benchmark titles worldwide, available both in store
                  and for download across the world. Focus publishes games on all major platforms,
                  consoles and PC. Sandstorm, MudRunner, GreedFall, The Surge 2, SnowRunner…) that
                  have become benchmark titles worldwide, available both in store and for download
                  across the world. Focus publishes games on all major platforms, consoles and PC.
                </p>
              </div>
            </Fade>
          </div>

          <Fade bottom>
            <div class="our-team__worker">
              <div class="our-team__worker-wrapper">
                <div class="our-team__worker-item">
                  <img class="our-team__worker-item-avatar" src={worker1} alt="worker" />
                  <div class="our-team__worker-item-info">
                    <h2 class="our-team__worker-item-name">Edward Tsys</h2>
                    <h4 class="our-team__worker-item-prof">CEO</h4>
                    <p class="our-team__worker-item-text">
                      Focus Home Interactive is a French publisher based in Paris, France.
                    </p>
                    <p class="our-team__worker-item-games">
                      <span>Favorite games</span>
                      <br />
                      The Witcher 3, Fallout 4, Battlefield 1
                    </p>
                    <div class="social-team">
                      <a href="https://www.instagram.com/banan_ip/" class="social-team-item">
                        <AiOutlineInstagram />
                      </a>
                      <a href="https://www.instagram.com/banan_ip/" class="social-team-item">
                        <AiOutlineTwitter />
                      </a>
                      <a href="mailto: tsys8796@gmail.com" class="social-team-item">
                        <AiOutlineMail />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="our-team__worker-item">
                  <img class="our-team__worker-item-avatar" src={worker2} alt="worker" />
                  <div class="our-team__worker-item-info">
                    <h2 class="our-team__worker-item-name">Ruslan Kriklivyy</h2>
                    <h4 class="our-team__worker-item-prof">3D Modeling</h4>
                    <p class="our-team__worker-item-text">
                      Focus Home Interactive is a French publisher based in Paris, France.
                    </p>
                    <p class="our-team__worker-item-games">
                      <span>Favorite games</span>
                      <br />
                      AC: II, Alan Wake, The Witcher 3
                    </p>
                    <div class="social-team">
                      <a
                        href="https://www.instagram.com/_ruslan.kriklivy/"
                        class="social-team-item">
                        <AiOutlineInstagram />
                      </a>
                      <a href="https://twitter.com/RKriklivyy" class="social-team-item">
                        <AiOutlineTwitter />
                      </a>
                      <a href="mailto: ruslankriklivyy@gmail.com" class="social-team-item">
                        <AiOutlineMail />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="our-team__worker-item">
                  <img class="our-team__worker-item-avatar" src={worker3} alt="worker" />
                  <div class="our-team__worker-item-info">
                    <h2 class="our-team__worker-item-name">Igor Oparenko</h2>
                    <h4 class="our-team__worker-item-prof">Writing</h4>
                    <p class="our-team__worker-item-text">
                      Focus Home Interactive is a French publisher based in Paris, France.
                    </p>
                    <p class="our-team__worker-item-games">
                      <span>Favorite games</span>
                      <br />
                      The Witcher 3, Fallout 4, Battlefield 1
                    </p>
                    <div class="social-team">
                      <a
                        href="https://www.instagram.com/igoprius_targaryen/"
                        class="social-team-item">
                        <AiOutlineInstagram />
                      </a>
                      <a href="https://www.instagram.com/banan_ip/" class="social-team-item">
                        <AiOutlineTwitter />
                      </a>
                      <a href="https://www.instagram.com/banan_ip/" class="social-team-item">
                        <AiOutlineMail />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="our-team__worker-item">
                  <img class="our-team__worker-item-avatar" src={worker4} alt="worker" />
                  <div class="our-team__worker-item-info">
                    <h2 class="our-team__worker-item-name">Sophie Kriklivyy</h2>
                    <h4 class="our-team__worker-item-prof">Art & Design</h4>
                    <p class="our-team__worker-item-text">
                      Focus Home Interactive is a French publisher based in Paris, France.
                    </p>
                    <p class="our-team__worker-item-games">
                      <span>Favorite games</span>
                      <br />
                      The Witcher 3, Fallout 4, Battlefield 1
                    </p>
                    <div class="social-team">
                      <a href="https://www.instagram.com/banan_ip/" class="social-team-item">
                        <AiOutlineInstagram />
                      </a>
                      <a href="https://www.instagram.com/banan_ip/" class="social-team-item">
                        <AiOutlineTwitter />
                      </a>
                      <a href="https://www.instagram.com/banan_ip/" class="social-team-item">
                        <AiOutlineMail />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default OurTeam;
