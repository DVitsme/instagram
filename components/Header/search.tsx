import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
const Search = () => {
  return (
    <div className="relative">
      <div className="absolute top-2 left-2">
        <MagnifyingGlassIcon className="h-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="rounded-md bg-gray-50 pl-10 border-color-500 text-sm focus:ring-black focus:border-black"
      />
    </div>
  );
};

export default Search;
