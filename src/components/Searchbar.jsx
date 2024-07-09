import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ searchItem, onSearchChange }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search Song, Artist"
        className="w-full p-2 bg-gray-800 text-white rounded-lg pr-10"
        value={searchItem}
        onChange={onSearchChange}
      />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
    </div>
  );
};

export default Searchbar;
