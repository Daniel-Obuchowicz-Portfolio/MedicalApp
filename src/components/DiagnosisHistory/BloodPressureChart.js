import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const BloodPressureChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Systolic',
        data: data.systolic,
        borderColor: '#C26EB4',
        tension: 0.3,
        pointBackgroundColor: '#C26EB4',
        pointRadius: 7, 
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2, 
      },
      {
        label: 'Diastolic',
        data: data.diastolic,
        borderColor: '#7E6CAB',
        tension: 0.3,
        pointBackgroundColor: '#7E6CAB',
        pointRadius: 7, 
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2, 
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default BloodPressureChart;
