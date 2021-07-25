import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function Dashboard() {
  const chartElement = useRef(null);

  useEffect(() => {
    const labels = ['Food', 'Drink', 'March', 'April', 'May', 'June'];

    const config = {
      labels,
      datasets: [
        {
          label: 'Dashboard',
          data: [10, 20, 30, 40, 50, 60],
        },
      ],
    };

    const options = {
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      // elements: {
      //   bar: {
      //     borderWidth: 2,
      //   }
      // },
      // responsive: true,
      // plugins: {
      //   legend: {
      //     position: 'right',
      //   },
      //   title: {
      //     display: true,
      //     text: 'Chart.js Horizontal Bar Chart'
      //   }
      // }
    };

    const chart = new Chart(chartElement.current, {
      type: 'bar',
      data: config,
      options,
    });
    chart.render();
  }, []);
  return (
    <>
      <canvas ref={chartElement} />
    </>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
