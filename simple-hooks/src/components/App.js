import React, { useState } from 'react';
import ResourceList from './ResourceList';
import '../styles/style.css';

const App = () => {

  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container mt">
      <div>
        <button onClick={() => setResource("posts")} className="ui button">posts</button>
        <button onClick={() => setResource("todos")} className="ui button">todos</button>
      </div>
      <ResourceList resource={resource}></ResourceList>
    </div>
  )
};

export default App;