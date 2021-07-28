import Chart from 'aw/components/Chart';
import dataset from 'aw/dataset';
import { groupBy, mapValues } from 'lodash';
import { useMemo } from 'react';
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
  const { data: categories1 } = useSWR(`/api/categories`, () =>
    Promise.resolve(dataset.categories)
  );
  const { data: records1 } = useSWR(`/api/records`, () =>
    Promise.resolve(dataset.records)
  );

  const compute = (categories, records) => {
    if (!records || !categories) return {};

    const labels = categories
      .filter((category) => category.type === 'EXPENSE')
      .map((category) => category.name);

    const data = mapValues(
      groupBy(
        records.map((record) => ({ ...record })),
        (record) => record.category
      ),
      (v) => v.reduce((sum, record) => sum + record.amount, 0)
    );

    return { labels, datasets: [{ data }] };
  };

  const data = useMemo(
    () => compute(categories1, records1),
    [categories1, records1]
  );

  return (
    <>
      <Chart type="bar" data={data} />
    </>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
