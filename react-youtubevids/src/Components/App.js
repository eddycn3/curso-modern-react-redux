import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSummit = async texto => {
    const resp = await youtube.get("/search", {
      params: { q: texto }
    });
    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0]
    });
  };

  onVideoSelected = video => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSummit={this.onSearchSummit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
