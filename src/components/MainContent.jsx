import React, { useState } from "react";
import Searchbar from "./Searchbar";

const MainContent = ({ songs, onSelectTrack }) => {
  const [view, setView] = useState("For You");
  const [searchItem, setSearchItem] = useState("");

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredSongs = songs
    .filter((song) => {
      return view === "For You" || song.top_track;
    })
    .filter((song) => {
      return (
        song.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchItem.toLowerCase())
      );
    });

  return (
    <div className="flex-1 px-8 py-4 flex flex-col overflow-hidden">
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

      <Searchbar searchItem={searchItem} onSearchChange={handleSearchChange} />

      <div className="songs-list flex-1 overflow-y-auto no-scrollbar transition-all duration-500">
        <ul>
          {filteredSongs.map((song) => (
            <li
              key={song.id}
              onClick={() => onSelectTrack(song)}
              className="flex justify-between items-center p-2 mb-2 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-600 active:bg-gray-600 transition-all duration-500"
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
