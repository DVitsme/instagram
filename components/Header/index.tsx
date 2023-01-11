import React from 'react';
import Logo from './logo';
import Search from './search';
import NavigationIcons from './navigationIcons';

const Header = () => {
  return (
    <div className="shadow-md border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <Logo />

        {/* Middle */}
        <Search />

        {/* Right */}
        <NavigationIcons />
      </div>
    </div>
  );
};

export default Header;
