import React, { useState } from 'react';
import axios from 'axios';

function DeleteUser() {
  const [userId, setUserId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/delete/${userId}`);
      console.log('User deleted:', response.data);
      // Add any additional handling or state updates upon successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle errors or show notifications to the user
    }
  };

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <h1>Delete User</h1>
      <label>
        Enter User ID:
        <input type="text" value={userId} onChange={handleChange} />
      </label>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
}

export default DeleteUser;
