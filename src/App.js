import React, { useEffect, useState } from "react";
import "./App.css";
import DownloadButton from "./DownloadButton";
import DownloadButtonDefault from "./DownloadButtonDefault";
import DownloadButtonInvalid from "./DownloadButtonInvalid";
import Logo from './images/logo.png';

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    console.log(id);
    setId(id);
  }, [videoUrl]);

  return (
    <div className="app">
    <div className="logo-div">
    <img className="logo-img" src={Logo} />
    </div>
      <div className="app__navbar">
        <h1>Youtube Video/Audio Convertor/Downloader</h1>
      </div>
      <div className="app__linkBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <input id="urlInput"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste youtube video url here..."
          />
        </form>
      </div>

      {videoUrl === "" ? (
        <DownloadButtonDefault />
      ) : (
        <div>
          {videoUrl.startsWith("https://www.youtube.com/watch?v=") ||
          videoUrl.startsWith("https://youtube.com/watch?v=") ||
          videoUrl.startsWith("www.youtube.com/watch?v=") ||
          videoUrl.startsWith("youtube.com/watch?v=") ||
          videoUrl.startsWith("v=") ? (
            <div>
              <DownloadButton id={id} type="mp3" />
              <br />
              <DownloadButton id={id} type="videos" />
            </div>
          ) : (
            <DownloadButtonInvalid />
          )}
         
        </div>
      )}
      
      <div className="footer" style={{paddingTop: "8%"}}>
      <hr />
      <br/>
          <p>2021 © Copyright All rights are reserved by <a href="https://www.youtube.com/channel/UCIDyiyMZIJYA86cKfsu-IiQ">AJIT KUMAR</a></p>
          <br/>
          </div>
    </div>
  );
}

export default App;
