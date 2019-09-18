import { useState, useEffect } from 'react';
import jsonPlaceholder from '../api/jsonPlaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const newResource = await jsonPlaceholder.get(`/${resource}`);
      setResources(newResource.data);
    })(resource);
  }, [resource]);
  return resources;
}

export default useResources;