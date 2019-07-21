import React from 'react';

import './VideoListItem.css';

const VideoListItem = ({ video, onClick }) => {
  const thumbnail = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;

  return (
    <div className="video-list-item item" onClick={onClick}>
      <img className="ui image" src={thumbnail} alt={title} />
      <div className="content">
        <div className="header">
          {title}
        </div>
      </div>
    </div>
  )
}

export default VideoListItem;