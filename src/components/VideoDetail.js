import React from "react";

const VideoDetail = ({video}) => {
    if (!video) return <div>Loading...</div>;

    const iframeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={iframeSrc} title={video.snippet.title}></iframe>
            </div>
            <div className="search-bar ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;