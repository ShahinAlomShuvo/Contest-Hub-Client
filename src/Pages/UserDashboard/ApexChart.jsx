import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ attemptPercentage, winningPercentage }) => {
  const [chartData, setChartData] = useState({
    series: [attemptPercentage, winningPercentage],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Attempt", "Winning"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
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
      series: [attemptPercentage, winningPercentage],
    });
  }, [attemptPercentage, winningPercentage]);

  return (
    <div id='chart'>
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
