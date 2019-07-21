import React from 'react';

const VideoListItem = ({ video }) => {
  console.log(video)
  const thumbnail = video.snippet.thumbnails.default;
  const title = video.snippet.title;
  const description = video.snippet.description;
  const id = video.id.videoId;

  return (
    <div>videoitem</div>
  )
}

export default VideoListItem;