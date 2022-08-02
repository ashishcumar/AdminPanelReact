import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "#fff";

export const options = {
  indexAxis: 'y',
  barThickness:7,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  barPrecentage:1,
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
    }
  },
};

const labels = ['Red', 'Aqua', 'Green', 'Yellow', 'Purple', 'Orange', 'Blue'];

export const data = {
  labels,
  datasets: [
    {
      label: '# of Hits',
      data: [33,40,28,49,58,38,44],
      backgroundColor: ['#F7604D', '#4ED6B8', '#A8D582', '#D7D768', '#9D66CC', '#DB9C3F', '#3889FC'],
      
    },

  ],

};



export function Performance() {
  return <Bar options={options} data={data} />;
}
