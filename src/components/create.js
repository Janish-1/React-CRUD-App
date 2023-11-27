import React, { useState } from 'react';
import axios from 'axios'; // Importing axios

function Create() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload on form submit

    try {
        // Sending Form Request to backend server.js with POST request via axios
        const response = await axios.post('http://localhost:3001/create',formData);
        console.log('Data sent to the backend:',response.data);
        setFormData({firstName:'',lastName:'',email:''}); // Empties the form field after submit of form
    } catch (error) {
        console.error('Error sending data: ',error);
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default Create;
