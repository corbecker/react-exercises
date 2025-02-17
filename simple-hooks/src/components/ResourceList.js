import React from 'react';
import useResources from './useResources';
import '../styles/style.css';

const listItems = (resource) => {
  return resource.map(resource => <li className="item" key={resource.id}>{resource.title}</li>)
}

const ResourceList = ({ resource }) => {

  const resources = useResources(resource);

  return (
    <div className="mt">
      <ul className="ui bulleted list">
        {listItems(resources)}
      </ul>
    </div>
  )
}

export default ResourceList;