import React, { useState } from 'react';
import axios from 'axios';

const UpdateUserForm = () => {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3001/update/${userId}`, formData);
      console.log(response.data);
      alert(response.data.message); // Display the response message
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating user data'); // Display error message
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={handleUserIdChange}
        /><br /><br />

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        /><br /><br />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
