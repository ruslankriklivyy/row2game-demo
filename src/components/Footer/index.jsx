import React from 'react';
import { Link } from 'react-router-dom';

import FooterForm from './FooterForm';
import { selectLink } from '../../helpers';

import logoSvg from '../../assets/images/logo.svg';

import './Footer.scss';

const Footer = ({ items, onSelectLink }) => {
  const onSelectItem = (index) => {
    selectLink(index, onSelectLink);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <Link to="/" className="logo">
            <img src={logoSvg} alt="logo svg" />
          </Link>
          <nav>
            <ul className="footer__menu">
              {items.map((name, index) => (
                <li
                  key={`${name} - ${index}`}
                  onClick={() => onSelectItem(index)}
                  className="footer__menu-item">
                  <Link
                    to={`/${name.split(' ').join('').toLowerCase()}`}
                    className="footer__menu-item-link">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="contact-us">
            <h4>Contact with us:</h4>
            <FooterForm />
          </div>
        </div>
        <div className="footer__copyright">
          <p>
            © 2020 Row2Game Entertainment. All Rights Reserved. Row2Game, Ubi.com and the Row2Game
            logo are trademarks of Row2Game Entertainment in the U.S. and/or other countries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
