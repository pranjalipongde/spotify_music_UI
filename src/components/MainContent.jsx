import React from "react";

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
    <div className="bg-gray-900 flex-1 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2>For You</h2>
        <h2>Top Tracks</h2>
      </div>
    </div>
  );
};

export default MainContent;
