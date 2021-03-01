import React from 'react';
import classNames from 'classnames';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import { selectLink } from '../../helpers';

import logoSvg from '../../assets/images/logo.svg';

import './Header.scss';
import SideBar from '../SideBar';

const Header = ({ items, onSelectLink, activeLink }) => {
  const onSelectItem = (index) => {
    selectLink(index, onSelectLink);
  };

  const fixedText = 'I am fixed :)';
  const whenNotFixed = 'I am not a fixed header :(';
  const [headerText, setHeaderText] = React.useState(whenNotFixed);
  React.useEffect(() => {
    const header = document.getElementById('header');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } else {
        header.classList.remove('sticky');
        if (headerText !== whenNotFixed) {
          setHeaderText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, [headerText]);

  return (
    <header className="header" id="header">
      <div className="container container--header">
        <Fade top>
          <div className="header__inner">
            <Link to="/" onClick={() => onSelectItem(null)} className="logo">
              <img src={logoSvg} alt="logo svg" />
            </Link>
            <nav className="nav">
              <ul className="menu">
                {items.map((name, index) => (
                  <li key={`${name} - ${index}`} className="menu__item">
                    <Link
                      to={`/${name.split(' ').join('').toLowerCase()}`}
                      onClick={() => onSelectItem(index)}
                      className={classNames('menu__item-link', {
                        active: activeLink >= 0 && index === activeLink,
                      })}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header__links">
              <ul className="social">
                <li className="social__item">
                  <a
                    href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                    className="social__item-link">
                    empty
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                    className="social__item-link">
                    empty
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                    className="social__item-link">
                    empty
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                    className="social__item-link">
                    empty
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                    className="social__item-link">
                    empty
                  </a>
                </li>
              </ul>
            </div>
            <SideBar items={items} />
          </div>
        </Fade>
      </div>
    </header>
  );
};

export default Header;
