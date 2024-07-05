import "./App.css";
import MainContent from "./components/MainContent";
import NowPlaying from "./components/NowPlaying";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
      <NowPlaying />
    </div>
  );
}

export default App;
