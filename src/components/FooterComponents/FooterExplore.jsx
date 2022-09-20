import React from 'react';
import Line from '../UI/Line/Line';
import Nav from '../HeaderComponents/Nav';
import navLinks from '../../data/navLinks';

const FooterExplore = () => {
  return (
    <div className='footer-explore'>
      <p>Explore</p>
      <Line lineClass='footer__line' />
      <Nav links={navLinks} navClass='footer-nav' classLink='footer-nav__link' />
    </div>
  );
};

export default FooterExplore;
