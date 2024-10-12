import './App.css';

import { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';

function App() {

  const [videoId, setVideoId] = useState(null);

  function playVideo(e){
    e.preventDefault();
    const selectedVideo = e.target.videoSelect.value;
    setVideoId(selectedVideo);
  }

  return (
    <div className="App">
      {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>}  <br />

      {/* Simple form for selecting a video */}
      <form onSubmit={playVideo}>
        <label htmlFor="videoSelect">Choose a video:</label>
        <select id="videoSelect" name="videoSelect">
          <option value="cat">Cat Video</option>
          <option value="earth">Earth Video</option>
          <option value="horse">Horse Video</option>
        </select>
        <br /><br />
        <button type="submit">Play Selected Video</button>
      </form>
    </div>
  );
}

export default App;
