
import './App.css';
import Video from './components/Video';


function App() {
  return (
    <div className="app">
      <div className="app_videos">
      <Video url="https://v9.tiktokcdn.com/bd480c4beb88afdab22367d871da87c4/5fc52f2b/video/tos/alisg/tos-alisg-pve-0037c001/8684c8d8e0b8482f8b7c805aeb67b38b/?a=1233&br=1772&bt=886&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202011301142550101902192221301771D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anA5cGc7ZjZ1dzMzaTczM0ApN2Y5OTszaDtmN2lpODYzZ2diYnJtX3ExNmxfLS0vMTRzcy5eLmJiYy5iXmMzLzViLjI6Yw%3D%3D&vl=&vr="
      channel="Himu"
      description="Hello Tik Tok Clone"
      song="React 99 problem"
      likes={100}
      shares={200}
      messages={333}
      />
         <Video url="https://v9.tiktokcdn.com/bd480c4beb88afdab22367d871da87c4/5fc52f2b/video/tos/alisg/tos-alisg-pve-0037c001/8684c8d8e0b8482f8b7c805aeb67b38b/?a=1233&br=1772&bt=886&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202011301142550101902192221301771D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anA5cGc7ZjZ1dzMzaTczM0ApN2Y5OTszaDtmN2lpODYzZ2diYnJtX3ExNmxfLS0vMTRzcy5eLmJiYy5iXmMzLzViLjI6Yw%3D%3D&vl=&vr="
      channel="Himu"
      description="Hello Tik Tok Clone"
      song="React 99 problem"
      likes={999}
      shares={200}
      messages={333}
      />
      </div>
      
    </div>
  );
}

export default App;
