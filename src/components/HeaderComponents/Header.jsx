import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import User from './User';
import navLinks from '../../data/navLinks';

const Header = () => {
  return (
    <header className='main-header flex'>
      <div className='wrapper flex justify-content-spaceBtw'>
        <Nav links={navLinks} navClass={'header-nav'} className='true' />
        <Logo />
      </div>
      <User />
    </header>
  );
};
export default Header;
