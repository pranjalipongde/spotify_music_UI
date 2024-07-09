import { useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import NowPlaying from "./components/NowPlaying";
import Sidebar from "./components/Sidebar";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState("#000");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://cms.samespace.com/items/songs"
        );
        if (Array.isArray(response.data.data)) {
          setSongs(response.data.data);
          console.log(response.data.data);
        } else {
          console.error("Unexpected response data:", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    setBackgroundColor(track.accent);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentTrack) {
      const currentIndex = songs.findIndex(
        (song) => song.id === currentTrack.id
      );
      const nextTrack = songs[(currentIndex + 1) % songs.length];
      setCurrentTrack(nextTrack);
      setBackgroundColor(nextTrack.accent);
    }
  };

  const handlePrevious = () => {
    if (currentTrack) {
      const currentIndex = songs.findIndex(
        (song) => song.id === currentTrack.id
      );
      const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
      setCurrentTrack(songs[previousIndex]);
      setBackgroundColor(songs[previousIndex].accent);
    }
  };

  return (
    <div
      className="app-container flex flex-col md:flex-row min-h-screen transition-all duration-500"
      style={{
        background: `linear-gradient(to right , ${backgroundColor}, #000)`,
      }}
    >
      <Sidebar backgroundColor={backgroundColor} />

      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">
        <MainContent
          songs={songs}
          onSelectTrack={handleSelectTrack}
          backgroundColor={backgroundColor}
        />

        <NowPlaying
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          backgroundColor={backgroundColor}
        />
      </div>
    </div>
  );
}

export default App;
