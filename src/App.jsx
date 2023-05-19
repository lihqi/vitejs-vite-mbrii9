import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import VideoJS from './videoJS';
const url = `https://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4`;
function VideoPlayer(props) {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: url,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VideoPlayer />
      <video width="640" height="480" controls>
        <source src={url} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
