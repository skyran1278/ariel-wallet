import Chart from 'aw/components/Chart';
import dataset from 'aw/dataset';
import { groupBy, mapValues } from 'lodash';
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
  const compute = (categories, records) => {
    if (!records || !categories) return {};

    const categoryIds = categories.map((category) => category.id);
    const categoryNames = categories.map((category) => category.name);
    const categoryColors = categories.map((category) => category.color);

    const data = mapValues(groupBy(records, 'category'), (v) =>
      v.reduce((sum, record) => sum + record.amount, 0)
    );

    const categoryAmounts = categoryIds.map((id) => data[id]);

    return {
      labels: categoryNames,
      datasets: [{ data: categoryAmounts, backgroundColor: categoryColors }],
    };
  };

  const { data: categories } = useSWR(`/api/categories`, () =>
    Promise.resolve(dataset.categories)
  );
  const { data: records } = useSWR(`/api/records`, () =>
    Promise.resolve(dataset.records)
  );

  const data = compute(categories, records);

  // TODO: (paul) label on right
  // https://github.com/chartjs/chartjs-plugin-datalabels
  const options = {
    indexAxis: 'y',
    // no grid
    // https://stackoverflow.com/questions/36676263/chart-js-v2-hiding-grid-lines
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return <Chart type="bar" data={data} options={options} />;
}

Dashboard.propTypes = {};

export default Dashboard;
