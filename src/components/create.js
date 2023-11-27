import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    security: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/create', formData);
      console.log('Data sent to the backend:', response.data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        security: '',
      });
    } catch (error) {
      console.error('Error sending data: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Security:
        <input
          type="text"
          name="security"
          value={formData.security}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Create;
