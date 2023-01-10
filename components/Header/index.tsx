import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="title">
      <div className="cursor h-24 w-32 relative hidden md:inline-grid">
        <Image
          src={'/static/images/Instagram-Logo.png'}
          alt="logo"
          fill={true}
        />
      </div>
    </div>
  );
};

export default Header;
