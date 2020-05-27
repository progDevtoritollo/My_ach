import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import './LineChart.scss';

const LineChart = () => {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      datasets: [
        {
          label: "level of thiccness",
          data: [230, 170, 130, 160, 168, 285, 220, 228, 240, 180, 140, 126],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4
        }
      ]
    })
  }
  
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="app">

        <Line data={chartData}       
          // option={{
          // responsive: false
          // }}
      />
    </div>
  );
};

export default LineChart;