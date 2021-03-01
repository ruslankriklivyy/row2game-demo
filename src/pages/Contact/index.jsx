import React from 'react';
import Fade from 'react-reveal/Fade';

import { Subscribe } from '../../components';
import ContactForm from './ContactForm';

import gamePng from '../../assets/images/game-screen-2.png';

import './Contact.scss';

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-inner">
          <img src={gamePng} alt="game screen" />
        </div>
        <Fade left>
          <div>
            <div className="inner">
              <h2 className="title">Contact</h2>
            </div>
            <div className="container">
              <div className="contact__box">
                <p className="contact-text">
                  Focus Home Interactive is a French publisher based in Paris, France. Known for the
                  quality, diversity and originality of its catalogue, Focus has published and
                  distributed original titles (A Plague Tale: Innocence, Vampyr, Farming Simulator,
                  Call of Cthulhu, Insurgency: Sandstorm, MudRunner, GreedFall, The Surge 2,
                  SnowRunner…) that
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <Subscribe />
    </>
  );
};

export default Contact;
