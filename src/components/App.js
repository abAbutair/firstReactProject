import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideosList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import "./style.css";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('dogs');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <h1 className="app-header">youtube video search API</h1>
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoClick={video => setSelectedVideo(video)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;