import React from 'react';

import ImageCard from './ImageCard';

import './ImageList.css';

const ImageList = ({ images }) => {

  const imageElements = images.map(({ alt_description, id, urls }) => {
    return <ImageCard key={id} src={urls.regular} alt={alt_description} />
  });

  return (
    <div className="image-list">{imageElements}</div>
  )
}

export default ImageList;