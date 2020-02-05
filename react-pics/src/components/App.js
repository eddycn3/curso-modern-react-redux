import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSummit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    if (response.status === 200)
      this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSummit={this.onSearchSummit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
