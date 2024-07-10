import React, { useEffect, useRef, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";

const NowPlaying = ({
  currentTrack,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const seekTime = (e.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
    }
  };

  return (
    <div
      className={`now-playing p-6 flex flex-col items-center justify-center ${
        currentTrack ? "has-track" : ""
      }`}
    >
      {currentTrack ? (
        <>
          <div className="flex flex-row items-center lg:flex-col mb-4 lg:mb-0 lg:mr-4">
            <div className="flex flex-col mr-4 lg:justify-start">
              <h2 className="text-white text-3xl font-bold mb-2">
                {currentTrack.name}
              </h2>
              <p className="text-gray-500 text-md mb-4">
                {currentTrack.artist}
              </p>
            </div>

            <div class="hidden lg:block flex-shrink-0 lg:ml-4">
              <img
                src={`https://cms.samespace.com/assets/${currentTrack.cover}`}
                alt={currentTrack.name}
                className=" h-[370px] w-[340px] object-cover rounded-xl "
              />
            </div>
          </div>

          <div className="bg-gray-500 rounded-lg overflow-hidden relative h-1 mb-4 w-[330px]">
            <div
              className="bg-white h-full absolute top-0 left-0 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
            <input
              type="range"
              value={progress}
              onChange={handleSeek}
              className="w-full opacity-1 text-white"
            />
          </div>

          <div className="flex justify-between items-center w-[340px] ">
            <button className="text-white p-2 rounded-full bg-gray-600">
              <IoIosMore />
            </button>

            <div className="flex justify-between">
              <button className="text-white px-4" onClick={onPrevious}>
                <IoPlayBack />
              </button>

              <button
                className="text-black p-2 rounded-full bg-white"
                onClick={onPlayPause}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <button className="text-white px-4" onClick={onNext}>
                <IoPlayForward />
              </button>
            </div>

            <button className="text-white p-2 rounded-full bg-gray-600">
              <HiOutlineSpeakerWave />
            </button>
          </div>

          <audio
            ref={audioRef}
            src={currentTrack.url}
            onTimeUpdate={handleTimeUpdate}
          />
        </>
      ) : (
        <p className="text-white">Select a song to play</p>
      )}
    </div>
  );
};

export default NowPlaying;
