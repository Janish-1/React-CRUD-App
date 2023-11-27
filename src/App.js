import React, { useState } from 'react';
import CreateForm from './components/create';
import ReadForm from './components/read';
import UpdateUserForm from './components/update';
import DeleteUser from './components/delete';
import PieChart from './components/pie34';
import GraphComponent from './components/graph';
import Register from './components/register';
import Login from './components/login';

function App() {
  const [crudAction, setCRUDAction] = useState(''); // State to track CRUD actions

  // Function to handle CRUD actions
  const handleCRUDAction = (action) => {
    setCRUDAction(action);
    // Perform actions like fetching data, updating state, etc., based on the action
    // For example, if action === 'create', you can render the form to create a new entry
  };

  return (
    <div>
      <h1>Code Snippets to Interact with Database</h1>
      <div>
        <button onClick={() => handleCRUDAction('create')}>Create</button>
        <button onClick={() => handleCRUDAction('read')}>Read</button>
        <button onClick={() => handleCRUDAction('update')}>Update</button>
        <button onClick={() => handleCRUDAction('delete')}>Delete</button>
        <button onClick={() => handleCRUDAction('graph')}>Graph</button>
        <button onClick={() => handleCRUDAction('PieChart')}>PieChart</button>
        <button onClick={() => handleCRUDAction('login')}>Login</button>
        <button onClick={() => handleCRUDAction('register')}>Register</button>
      </div>
      {/* Render the form component based on CRUD action */}
      {crudAction === 'create' && (
        <div>
          <h2>Create Form Element</h2>
          <CreateForm />
        </div>
      )}
      {/* Render the form component based on CRUD action */}
      {crudAction === 'read' && (
        <div>
          <h2>Read Form Element</h2>
          <ReadForm />
        </div>
      )}
      {/* Render the form component based on CRUD action */}
      {crudAction === 'update' && (
        <div>
          <h2>Update Form Element</h2>
          <UpdateUserForm />
        </div>
      )}
      {/* Render the form component based on CRUD action */}
      {crudAction === 'delete' && (
        <div>
          <h2>Delete Form Element</h2>
          <DeleteUser />
        </div>
      )}
      {/* Render the form component based on CRUD action */}
      {crudAction === 'PieChart' && (
        <div>
          <PieChart />
        </div>
      )}
      {crudAction === 'graph' && (
        <div>
          <h2>Graph</h2>
          <GraphComponent />
        </div>
      )}
    {crudAction === 'register' && (
      <div>
        <h2>Register Form</h2>
        <Register />
      </div>
    )}
    {crudAction === 'login' && (
      <div>
        <h2>Login Form</h2>
        <Login />
      </div>
    )}
    </div>
  );
}

export default App;
