import {
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid';

const NavigationIcons = () => {
  return (
    <div className="flex space-x-4 items-center">
      <HomeIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out " />
      <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out " />
      <UserCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out " />
    </div>
  );
};

export default NavigationIcons;
