import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the backend
    axios.get('http://localhost:3001/read') // Use GET instead of POST
      .then(response => {
        setData(response.data); // Set the retrieved data in the state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once

  // Render the retrieved data in your component
  return (
    <div>
      Read Form
      <ul>
        {data.map(item => (
          <li key={item._id}>
            {item.firstName} - {item.lastName} - {item.email} - {item.password} - {item.role} - {item.security}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
