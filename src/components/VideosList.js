import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoClick}) => {
    const renderedVideo = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} onVideoClick={onVideoClick}/>
    });

    return (
      <div className="ui relaxed divided list">
          {renderedVideo}
      </div>
    );
}

export default VideoList;