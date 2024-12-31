import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Define the custom plugin to draw gray lines below each bar
const grayLinePlugin = {
  id: "grayLine",
  afterDatasetDraw(chart, args, options) {
    const { ctx, scales } = chart;
    const dataset = chart.getDatasetMeta(0); // Assuming the first dataset
    dataset.data.forEach((bar, index) => {
      ctx.save();
      ctx.strokeStyle = "#CBD5E1"; // Light gray color
      ctx.lineWidth = 2;

      const x = bar.x;
      const y = bar.y + bar.height; // Start below the bar

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + 10); // Extend line 10 pixels below the bar
      ctx.stroke();
      ctx.restore();
    });
  },
};

// Register ChartJS components and the custom plugin
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  grayLinePlugin // Register the custom plugin
);

const Charts = () => {
  // Data for Bar Chart
  const barData = {
    labels: ["20", "22", "24", "26", "28", "30", "02", "04", "06", "08", "10", "12", "14", "16"],
    datasets: [
      {
        label: "Revenue",
        data: [2000, 3500, 4500, 3000, 2500, 4000, 5000, 8500, 1500, 3000, 7000, 6500, 2500, 5000],
        backgroundColor: (ctx) => {
          const index = ctx.dataIndex;
          return index === 7 ? "#EF4444" : "#F59E0B"; // Highlight "04" with red color
        },
        borderRadius: 4,
        barThickness: 6, // Further decreased bar width
      },
    ],
  };

  // Options for Bar Chart
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow height adjustment
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#A0AEC0",
        },
      },
      y: {
        grid: {
          color: "#E2E8F0",
        },
        ticks: {
          color: "#A0AEC0",
          beginAtZero: true,
          stepSize: 1000, 
        },
        suggestedMax: 9000, 
      },
    },
  };

  const doughnutData = {
    labels: ["Desktop", "Mobile", "Tablet", "Unknown"],
    datasets: [
      {
        data: [830.0, 755.75, 550.81, 150.84],
        backgroundColor: ["#F59E0B", "#2563EB", "#0EA5E9", "#F43F5E"],
        hoverBackgroundColor: ["#D97706", "#1E3A8A", "#0284C7", "#BE123C"], 
        borderWidth: 0,
        radius: "80%",
        
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const total = tooltipItem.dataset.data.reduce((acc, value) => acc + value, 0);
            const percentage = ((tooltipItem.raw / total) * 100).toFixed(1);
            const value = tooltipItem.raw.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            });
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "64%",
  };

  const doughnutCenterText = {
    id: "centerText",
    beforeDraw(chart) {
      const { ctx, chartArea } = chart;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      ctx.save();
      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "#1F2937"; // Text color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText("64%", centerX, centerY);
      ctx.restore();
    },
  };

  return (
    <>
    <style>
    {`

      @media (max-width: 1130px) {
        .charts-container {
          flex-direction: column;
          gap: 2rem;
          }
          .chart-item{
          width:100%;
          }
          .data{
          justify-content:center;
          }
        }
          @media (max-width: 1350px) and (min-width:1130px){
          .flexdir{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          margin-top:0px;
    }   
    }
    `}
  </style>
    <div className="flex charts-container flex-wrap md:flex-nowrap justify-between space-y-6 md:space-y-0 md:space-x-6 mt-10">
      {/* Bar Chart Container */}
      <div
        className="w-full md:w-[60%] bg-white p-6 rounded-lg chart-item shadow-md"
        style={{ height: "450px" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <a href="#" className="text-md font-semibold text-gray-800 hover:underline">
            Advanced Report &rarr;
          </a>
        </div>
        <Bar data={barData} options={barOptions} className="mt-4 mb-4" />
      </div>

      {/* Doughnut Chart Container */}
      <div
        className="w-full md:w-[40%] bg-white p-3  spacex chart-item rounded-lg shadow-md flex flex-col"
        style={{ height: "450px" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Revenue by device</h2>
          <a href="#" className="text-md font-semibold text-gray-800 hover:underline">
            More &rarr;
          </a>
        </div>

        {/* Chart */}
        <div className="flex flex-col items-center justify-start h-[65%]">
          <Doughnut
            data={doughnutData}
            options={doughnutOptions}
            plugins={[doughnutCenterText]}
          />
        </div>

        {/* Legend */}
        <div
  className="grid flexdir grid-cols-2 gap-y-4 gap-x-6 gaps mt-9"
  style={{ maxWidth: "100%" }}
>
  {/* First Column: Desktop and Mobile */}
  <div className="space-y-3 w-full">
    {["Desktop", "Mobile"].map((label, index) => (
      <div key={index} className="flex items-center justify-between">
        {/* Circle and Label */}
        <div className="flex items-center space-x-2">
          <span
            className="w-4 h-4 rounded-full"
            style={{
              backgroundColor:
                doughnutData.datasets[0].backgroundColor[doughnutData.labels.indexOf(label)],
            }}
          ></span>
          <span className="text-gray-800 text-sm font-medium">{label}</span>
        </div>
        {/* Price and Percentage */}
        <div className="text-gray-500 text-sm flex space-x-4">
          <span>
            {`$${doughnutData.datasets[0].data[doughnutData.labels.indexOf(label)].toLocaleString(
              "en-US"
            )}`}
          </span>
          <span>
            {`${(
              (doughnutData.datasets[0].data[doughnutData.labels.indexOf(label)] /
                doughnutData.datasets[0].data.reduce((sum, value) => sum + value, 0)) *
              100
            ).toFixed(1)}%`}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Second Column: Tablet and Unknown */}
  <div className="space-y-3 w-full">
    {["Tablet", "Unknown"].map((label, index) => (
      <div key={index} className="flex items-center justify-between">
        {/* Circle and Label */}
        <div className="flex items-center space-x-2">
          <span
            className="w-4 h-4 rounded-full"
            style={{
              backgroundColor:
                doughnutData.datasets[0].backgroundColor[doughnutData.labels.indexOf(label)],
            }}
          ></span>
          <span className="text-gray-800 text-sm font-medium">{label}</span>
        </div>
        {/* Price and Percentage */}
        <div className="text-gray-500 text-sm flex space-x-4">
          <span>
            {`$${doughnutData.datasets[0].data[doughnutData.labels.indexOf(label)].toLocaleString(
              "en-US"
            )}`}
          </span>
          <span>
            {`${(
              (doughnutData.datasets[0].data[doughnutData.labels.indexOf(label)] /
                doughnutData.datasets[0].data.reduce((sum, value) => sum + value, 0)) *
              100
            ).toFixed(1)}%`}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
    </>
  );
};

export default Charts;