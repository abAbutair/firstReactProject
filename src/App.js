import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtubeApiSearch";
import VideoList from "./components/VideosList";
import VideoDetail from "./components/VideoDetail";
import "./components/style.css";

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onFormSubmit('dogs');
    }

    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
           params: {
               q: term
           }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    onVideoClick = video => {
        this.setState({selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="app-header">youtube video search API</h1>
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wided column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wided column">
                            <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;