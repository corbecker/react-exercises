import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {

  const videoListItems = videos.map(video => {
    return <VideoListItem video={video} />
  });

  return (
    <div>
      {videoListItems}
    </div>
  )
}

export default VideoList;