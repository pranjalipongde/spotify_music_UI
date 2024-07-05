import React from "react";
import { IoIosMore } from "react-icons/io";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";

const NowPlaying = () => {
  return (
    <div className="bg-gray-800 p-6 flex-1">
      <h2 className="text-white text-2xl mb-4">Title</h2>
      <p className="text-white text-lg mb-4">Artist</p>
      <img src="" alt="title" className="w-full h-64 object-cover mb-4" />

      <div className="bg-gray-700 rounded-lg overflow-hidden">
        <div className="bg-white h-2" style={{ width: "50%" }}></div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="text-white p-2 rounded-full bg-gray-600">
          <IoIosMore />
        </button>
        <div className="flex justify-between">
          <button className="text-white px-4">
            <IoPlayBack />
          </button>
          <button className="text-black p-2 rounded-full bg-white">
            <FaPlay />
          </button>
          <button className="text-white px-4">
            <IoPlayForward />
          </button>
        </div>

        <button className="text-white p-2 rounded-full bg-gray-600">
          <HiOutlineSpeakerWave />
        </button>
      </div>
    </div>
  );
};

export default NowPlaying;
