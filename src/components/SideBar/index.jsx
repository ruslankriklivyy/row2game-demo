import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { IoIosClose } from 'react-icons/io';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF, FaVk } from 'react-icons/fa';

import { selectLink } from '../../helpers';

import menuSvg from '../../assets/images/menu.svg';

import './SideBar.scss';

const SideBar = ({ items }) => {
  const [visibleSideBar, setVisibleSideBar] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setVisibleSideBar(false);
    selectLink(index, setActiveItem);
  };

  const sidebarRef = React.useRef();
  const blockOutRef = React.useRef();

  const onVisibleSideBar = () => {
    setVisibleSideBar(!visibleSideBar);
  };

  const onCloseVisibleSideBar = () => {
    setVisibleSideBar(false);
  };

  const escapeListener = React.useCallback((e) => {
    if (e.key === 'Escape') {
      onCloseVisibleSideBar();
    }
  }, []);
  const clickListener = React.useCallback((e) => {
    if (e.target.className === blockOutRef.current.className) {
      onCloseVisibleSideBar();
    }
  }, []);
  // Below is the 10 lines of code you need.
  React.useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  return (
    <div className="sidebar">
      <button onClick={onVisibleSideBar}>
        <img src={menuSvg} alt="menu svg" />
      </button>
      <>
        <div
          ref={blockOutRef}
          className={classNames('sidebar-menu-blockout', {
            show: visibleSideBar,
          })}></div>
        <div
          ref={sidebarRef}
          className={classNames('sidebar-menu', {
            show: visibleSideBar,
          })}>
          <button onClick={onVisibleSideBar} className="sidebar-menu-close-btn">
            <IoIosClose color="#ffffff" size="33px" />
          </button>
          <div className="sidebar-menu-info">
            <ul className="sidebar-links">
              {items.map((name, index) => (
                <li key={`${name} - ${index}`} onClick={() => onSelectItem(index)}>
                  <Link
                    to={`/${name.split(' ').join('').toLowerCase()}`}
                    className={classNames('sidebar-links-item', {
                      active: activeItem >= 0 && index === activeItem,
                    })}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="social__sidebar">
              <li className="social__sidebar-item">
                <a
                  href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                  className="social__sidebar-item-link">
                  <AiOutlineInstagram color="#fff" size="25px" />
                </a>
              </li>
              <li className="social__sidebar-item">
                <a
                  href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                  className="social__sidebar-item-link">
                  <AiOutlineTwitter color="#fff" size="25px" />
                </a>
              </li>
              <li className="social__sidebar-item">
                <a
                  href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                  className="social__sidebar-item-link">
                  <FaFacebookF color="#fff" size="21px" />
                </a>
              </li>
              <li className="social__sidebar-item">
                <a
                  href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                  className="social__sidebar-item-link">
                  <AiOutlineYoutube color="#fff" size="25px" />
                </a>
              </li>
              <li className="social__sidebar-item">
                <a
                  href="https://www.youtube.com/channel/UC0lFZSNtM9kgeN6MHGyWxNQ"
                  className="social__sidebar-item-link">
                  <FaVk color="#fff" size="25px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default SideBar;
