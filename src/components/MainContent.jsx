import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const MainContent = ({ songs, onSelectTrack }) => {
  const [view, setView] = useState("For You");

  const filteredSongs =
    view === "For You" ? songs : songs.filter((song) => song.top_track);

  return (
    <div className="bg-gray-900 flex-1 p-6 flex flex-col">
      <div className="flex items-center mb-4 space-x-6">
        <button
          className={` text-2xl font-bold ${
            view === "For You" ? "text-white" : "text-gray-500"
          }`}
          onClick={() => setView("For You")}
        >
          For You
        </button>

        <butotn
          className={` text-2xl font-bold cursor-pointer ${
            view === "Top Tracks" ? "text-white" : "text-gray-500"
          }`}
          onClick={() => setView("Top Tracks")}
        >
          Top Tracks
        </butotn>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Song, Artist"
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg pr-10"
        />
        <FaSearch className="absolute right-3 top-5 transform -translate-y-1/2 text-white" />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <ul>
          {filteredSongs.map((song) => (
            <li
              key={song.id}
              onClick={() => onSelectTrack(song)}
              className="flex justify-between items-center p-2 mb-2 bg-gray-800 text-white rounded-lg cursor-pointer"
            >
              <img
                src={`https://cms.samespace.com/assets/${song.cover}`}
                alt={song.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <p className="text-lg">{song.name}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <p className="text-sm">{song.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
