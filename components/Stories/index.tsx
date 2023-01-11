import { useEffect, useState } from 'react';
import minifaker from 'minifaker';

import Story from './story';

import 'minifaker/locales/en';

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const users = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${i}`, //this link will give a random image, they offer up to 70 images
      id: i
    }));
    setStoryUsers(users);
  }, []);

  return (
    <div>
      <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
        {storyUsers.map((users) => (
          <Story key={users.id} username={users.username} img={users.img} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
