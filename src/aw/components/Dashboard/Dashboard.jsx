import dataset from 'aw/dataset';
import Chart from 'chart.js/auto';
import { groupBy, mapValues } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

// function useCategories() {
//   const { data, error } = useSWR(`/api/categories`, () =>
//     Promise.resolve(dataset.categories)
//   );

//   return {
//     categories: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

// function useRecords() {
//   const { data, error } = useSWR(`/api/records`, () =>
//     Promise.resolve(dataset.records)
//   );

//   return {
//     records: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

// https://dev.to/vcanales/using-chart-js-in-a-function-component-with-react-hooks-246l
// https://www.createwithdata.com/react-chartjs-dashboard/
// { categories, records }
function Dashboard() {
  const chartElement = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const { data: categories } = useSWR(`/api/categories`, () =>
    Promise.resolve(dataset.categories)
  );
  const { data: records } = useSWR(`/api/records`, () =>
    Promise.resolve(dataset.records)
  );

  useEffect(() => {
    const labels = ['Food', 'Drink', 'March', 'April', 'May', 'June'];

    const config = {
      labels,
      datasets: [
        {
          label: 'Dashboard',
          data: [10, 20, 30, 40, 50, 60],
          borderWidth: 1,
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

    if (chartElement?.current) {
      // Canvas is already in use. Chart with ID '0' must be destroyed before the canvas can be reused.
      console.log('hi');
      const newChartInstance = new Chart(chartElement.current, {
        type: 'bar',
        data: config,
        options,
      });
      setChartInstance(newChartInstance);

      return () => newChartInstance.destroy();
    }
    return () => {};
  }, [chartElement]);

  useEffect(() => {
    if (!chartInstance || !records || !categories) {
      return;
    }

    const labels = categories
      .filter((category) => category.type === 'EXPENSE')
      .map((category) => category.name);

    console.log(labels);

    const data = mapValues(
      groupBy(
        records.map((record) => ({ ...record })),
        (record) => record.category
      ),
      (v) => v.reduce((sum, record) => sum + record.amount, 0)
    );

    console.log(data);

    // const labelIds = categories
    //   .filter((category) => category.type === 'EXPENSE')
    //   .map((category) => category.id);

    // const data = labelIds.map((label) => dataObject[label] ?? 0);

    chartInstance.data.labels = labels;
    chartInstance.data.datasets[0].data = data;

    chartInstance.update();
  }, [chartInstance, records, categories]);

  return (
    <>
      <canvas ref={chartElement} />
    </>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
