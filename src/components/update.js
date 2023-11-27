import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/update/${formData.id}`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });

      console.log('Updated:', response.data);
      // Handle success or navigation to another page
    } catch (error) {
      console.error('Error updating:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="User ID" onChange={handleChange} />
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input type="text" name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

export default Update;
