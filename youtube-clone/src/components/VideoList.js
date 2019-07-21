import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {

  const videoListItems = videos.map(video => {
    return <VideoListItem onClick={() => onVideoSelect(video)} key={video.id.videoId} video={video} />
  });

  return (
    <div className="ui relaxed divided list">
      {videoListItems}
    </div>
  )
}

export default VideoList;