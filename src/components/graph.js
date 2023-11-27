import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const GraphComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/bar'); // Replace with your API endpoint
        const dataFromBackend = response.data;

        const formattedChartData = dataFromBackend.map(item=> [item.Name,item.Value])

        // Assuming the dataFromBackend is an array of arrays (e.g., [['Year', 'Sales'], [2014, 1000], ...])
        setChartData([['Name','Value'], ...formattedChartData]);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      title: 'Names v Values'
    },
  };

  return (
    <div>
      <h2>Graph Component with Data from Axios</h2>
      <Chart
        chartType="LineChart" // You can change the chart type as needed
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default GraphComponent;
