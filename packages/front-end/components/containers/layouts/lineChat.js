import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    }
  },
};

const labels = {
  "This week": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "This month": ["week 1", "week 2", "week 3", "week4"],
  "This year": [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

export function CustomLineChart({ duration }) {

    const x = labels[duration];
    const data = {
        labels: x,
        datasets: [
          {
            label: "Total Income",
            data: x.map(() => Math.floor(Math.random() * 10)),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
      
  return <Line options={options} data={data} />;
}
