import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const PieChartComponent = () => {
  const [dataFromBackend, setDataFromBackend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/pie'); // Replace with your backend URL
        const responseData = response.data;

        // Assuming responseData is an array of objects with 'Name' and 'Value' properties
        const chartData = responseData.map(item => [item.Name, item.Value]);

        setDataFromBackend(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={[['Name', 'Value'], ...dataFromBackend]} // Providing data to the PieChart component
        options={{ /* Add your chart options here */ }}
      />
    </div>
  );
};

export default PieChartComponent;
