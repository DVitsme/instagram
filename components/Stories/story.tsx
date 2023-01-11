import React from 'react';
import Image from 'next/image';

const Story = ({ username, img }) => {
  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform ease-out duration-200"
        src={img}
        alt={username}
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
