import React from "react";
import "./style.css";

const VideoItem = ({video, onVideoClick}) => {
    const onItemClick = () => onVideoClick(video);

    return (
      <div className="video-item item" onClick={onItemClick}>
          <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
          <div className="content">
              <p className="header">{video.snippet.title}</p>
          </div>
      </div>
    );
}

export default VideoItem;