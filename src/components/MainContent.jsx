import React from "react";
import { FaSearch } from "react-icons/fa";

const tracks = [
  { id: 1, title: "Starboy", artist: "The Weeknd", duration: "4:16" },
  { id: 2, title: "Demons", artist: "Imagine Dragons", duration: "5:24" },
  {
    id: 3,
    title: "Mouth of the river",
    artist: "Imagine Dragons",
    duration: "6:23",
  },
  { id: 4, title: "Ghost Stories", artist: "Coldplay", duration: "3:10" },
  { id: 5, title: "Sparks", artist: "Coldplay", duration: "4:23" },
  { id: 6, title: "Viva La Vida", artist: "Coldplay", duration: "5:32" },
  {
    id: 7,
    title: "Hymn for the weekend",
    artist: "Coldplay",
    duration: "2:23",
  },
  { id: 8, title: "Pain", artist: "Ryan Jones", duration: "3:12" },
  { id: 9, title: "Origin", artist: "Imagine Dragons", duration: "3:43" },
];

const MainContent = () => {
  return (
    <div className="bg-gray-900 flex-1 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl">For You</h2>
        <h2 className="text-white text-2xl">Top Tracks</h2>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Song, Artist"
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
        />
        <FaSearch className="absolute right-3 top-5 transform -translate-y-1/2 text-white" />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <ul>
          {tracks.map((track) => (
            <li
              key={track.id}
              onClick={() => onSelectTrack(track)}
              className="flex justify-between items-center p-2 mb-2 bg-gray-800 text-white rounded-lg cursor-pointer"
            >
              <div>
                <p className="text-lg">{track.title}</p>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
              <p className="text-sm">{track.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
