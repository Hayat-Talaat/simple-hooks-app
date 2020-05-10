import React, { useState } from "react";
import ResourceList from './pages/ResourceList';
import UsersList from './pages/UsersList'

const App = () => {

    const [resouce, setResource] = useState('Posts');
  
    return (
      <div>
        <UsersList />
        <div>
          <button onClick={() => setResource('Posts')}>
            Posts
          </button>
          <button onClick={() => setResource('Todos')}>
            Todos
          </button>
        </div>
        <ResourceList resourse={resouce} />
      </div>
    );
}

export default App;
