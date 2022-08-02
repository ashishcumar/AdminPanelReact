import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.defaults.color = "#fff";

ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
  labels: ["Used Storage (18.240GB)", "System Storage (6.500GB)", "Available Storage (9.150GB)"],
  datasets: [
    {
      label: '# of Votes',
      data: [18,6,9],
      backgroundColor: [
        "#F7604D",
        "#4ED6B8",
        "#A8D582"
      ],
      borderColor: [
        'white',
      ],
      borderWidth: 1,
    },
  ],
  fontColor:'white'
};

export default function StorageInfo() {

  return <div style={{width:"74%",margin:"auto",color:"white"}}>
  <Pie  data={data} />;
  </div> 
}