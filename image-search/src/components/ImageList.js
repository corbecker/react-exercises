import React from 'react';

const ImageList = ({ images }) => {

  const imageElements = images.map(({ alt_description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={alt_description}></img>
  });

  return (
    <div className="ui container">{imageElements}</div>
  )
}

export default ImageList;