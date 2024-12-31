import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const OrdersGraph = () => {
  // Data for the graph
  const chartData = {
    labels: ['16', '18', '20', '22', '24', '26', '28', '30', '02', '04', '06', '08', '10'],
    datasets: [
      {
        label: 'Orders Update',
        data: [1.5, 1.7, 1.2, 1.0, 2.2, 2.5, 1.8, 2.1, 2.5, 2.0, 1.7, 1.9],
        borderColor: 'rgba(236, 0, 140, 1)', // Pink line color
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#F5F2FF'); // Gradient start
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Gradient end
          return gradient;
        },
        pointBackgroundColor: (ctx) => {
          return ctx.dataIndex === 7 ? '#ffffff' : 'rgba(0,0,0,0)';
        },
        pointBorderColor: (ctx) => {
          return ctx.dataIndex === 7 ? 'rgba(236, 0, 140, 1)' : 'rgba(0,0,0,0)';
        },
        pointBorderWidth: 2,
        pointRadius: (ctx) => (ctx.dataIndex === 7 ? 8 : 0), // Show one point
        pointHoverRadius: 8,
        tension: 0.4, // Smooth curve
        fill: true, // Gradient fill
      },
    ],
  };

  // Options for the graph
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw}M`; // Tooltip value with "M"
          },
        },
        backgroundColor: '#f472b6',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        displayColors: false,
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          color: '#9ca3af',
        },
      },
      y: {
        grid: {
          color: 'rgba(209, 213, 219, 0.3)', // Light gray y-axis grid
        },
        ticks: {
          color: '#9ca3af',
          callback: function (value) {
            return `$${value}M`; // Format y-axis ticks
          },
        },
        min: 0.5, // Ensure the line does not touch the x-axis
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Orders Update</h2>
        <button className="text-gray-500 hover:text-pink-500 text-sm font-medium">
          View Details →
        </button>
      </div>

      {/* Chart Container */}
      <div className="relative h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default OrdersGraph;



