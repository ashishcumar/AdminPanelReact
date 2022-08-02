import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
Chart.defaults.color = "#fff";


export const options = {
  responsive: true,
  scales:{
    x:{
      ticks:{
        color:'white'
      }
    },
     y:{
      ticks:{
        color:'white'
      }
    },
  }

}



const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","july"],
  datasets: [
    {
      label: "Latest Hits",
      data: [88, 68, 79, 57, 50, 55,70],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#4AB5B7",
      tension:0.30,
      color:'white'
    },
    {
      label: "Popular Hits",
      data: [33, 45, 37, 21, 55, 74,69],
      fill: false,
      borderColor: "#FF6384",
      tension:0.30,
      color:'white'
    },
    {
      label: "Featured",
      data: [44, 19, 38, 46, 85, 66,80],
      fill: false,
      borderColor: "#9966FF",
      tension:0.30,
      color:'white'
    }
  ]
};

export default function LatestHits () {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}