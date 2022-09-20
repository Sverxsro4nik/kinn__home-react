import React from 'react';
import FooterCopyright from './FooterCopyright';
import FooterExplore from './FooterExplore';
import FooterHelp from './FooterHelp';
import FooterSochial from './FooterSochial';

const Footer = () => {
  return (
    <footer className='footer justyfy-content-spaceBtw flex'>
      <FooterCopyright />
      <FooterExplore />
      <FooterHelp />
      <FooterSochial />
    </footer>
  );
};

export default Footer;
