import { useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import NowPlaying from "./components/NowPlaying";
import Sidebar from "./components/Sidebar";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

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
    setSelectedTrack(track);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <Sidebar />
      <div className="flex flex-col lg:flex-row flex-1">
        <MainContent songs={songs} onSelectTrack={handleSelectTrack} />
        <NowPlaying />
      </div>
    </div>
  );
}

export default App;
