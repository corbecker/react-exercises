import React, { useState, useEffect } from 'react';
import jsonPlaceholder from '../api/jsonPlaceholder';

const listItems = (resource) => {
  return resource.map(resource => <li className="item" key={resource.id}>{resource.title}</li>)
}

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResource(resource);
  }, [resource])

  const fetchResource = async (resource) => {
    const newResource = await jsonPlaceholder.get(`/${resource}`);
    setResources([...newResource.data]);
  }

  return (
    <div>
      <ul className="ui bulleted list">
        {listItems(resources)}
      </ul>
    </div>
  )
}

export default ResourceList;