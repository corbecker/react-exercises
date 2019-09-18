import React, { useState, useEffect } from 'react';
import jsonPlaceholder from '../api/jsonPlaceholder';
import '../styles/style.css';

const listItems = (resource) => {
  return resource.map(resource => <li className="item" key={resource.id}>{resource.title}</li>)
}

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const newResource = await jsonPlaceholder.get(`/${resource}`);
      setResources(newResource.data);
    })(resource);
  }, [resource])

  return (
    <div className="mt">
      <ul className="ui bulleted list">
        {listItems(resources)}
      </ul>
    </div>
  )
}

export default ResourceList;