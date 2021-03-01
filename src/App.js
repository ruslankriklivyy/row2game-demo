import React from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames';

import { selectLink } from './helpers';
import { Preloader, Header, Footer, ScrollToTop } from './components';
import { Home, OurTeam, Contact, SettleDown, AboutUs } from './pages';

const links = ['SETTLE DOWN', 'About Us', 'OUR TEAM', 'CONTACT'];

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(null);

  const onSelectLink = (index) => {
    const indexElem = index === null ? null : index;
    setActiveLink(indexElem);
  };

  const onSelectLinkBtn = (index) => {
    selectLink(index, setActiveLink);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1700);
  }, []);

  return (
    <div className="wrapper-home">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div
            className={classNames('home', {
              'home overlay': visiblePopup,
            })}>
            <Route
              path="/"
              render={() => (
                <Header activeLink={activeLink} onSelectLink={onSelectLink} items={links} />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  onSelectLinkBtn={onSelectLinkBtn}
                  links={links}
                  visiblePopup={visiblePopup}
                  setVisiblePopup={setVisiblePopup}
                />
              )}
            />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/" component={ScrollToTop} />
            <Route exact path="/ourteam" component={OurTeam} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/settledown" component={SettleDown} />
            <Route path="/" render={() => <Footer onSelectLink={onSelectLink} items={links} />} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
