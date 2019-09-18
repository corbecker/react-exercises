import React from 'react';
import useResources from './useResources';
import '../styles/style.css';

const listItems = (resource) => {
  return resource.map(resource => <li className="item" key={resource.id}>{resource.name}</li>)
}

const UsersList = () => {

  const resources = useResources("users");

  return (
    <div className="mt">
      <ul className="ui bulleted list">
        {listItems(resources)}
      </ul>
    </div>
  )
}

export default UsersList;