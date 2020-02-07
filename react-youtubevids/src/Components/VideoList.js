import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const renderedVideos = videos.map(v => {
    return (
      <VideoItem
        key={v.id.videoId}
        video={v}
        onVideoSelected={onVideoSelected}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default VideoList;
