
import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './components/axios'

function App() {
const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts")
      setVideos(response.data)

      return response;
    }

    fetchPosts()
  },[])
  return (
    <div className="app">
      <div className="app_videos">
        {
          videos.map(({url,description,channel,shares,song,messages,likes}) => (
            <Video>
              url={url},
              description={description},
              channel={channel},
              shares={shares},
              likes={likes},
              song={song},
              messages={messages}
            </Video>
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
