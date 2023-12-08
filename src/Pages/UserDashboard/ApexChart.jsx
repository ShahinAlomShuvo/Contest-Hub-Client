import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ loses, win }) => {
  const [chartData, setChartData] = useState({
    series: [loses, win],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Failed", "Winning"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    setChartData({
      ...chartData,
      series: [loses, win],
    });
  }, [loses, win]);

  return (
    <div className='flex justify-center' id='chart'>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type='pie'
        width={380}
      />
    </div>
  );
};

export default ApexChart;
