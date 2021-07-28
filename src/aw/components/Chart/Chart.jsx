import ChartJS from 'chart.js/auto';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function Chart({ type, data, options = {}, ...rest }) {
  const canvas = useRef(null);
  const [, setChart] = useState();

  console.log('new');

  // const initChart = useCallback(() => {
  //   if (!canvas.current) return;

  //   setChart(new ChartJS(canvas.current, { type, data, options, ...rest }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const destroyChart = useCallback(() => {
  //   if (chart) chart.destroy();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const updateChart = useCallback(() => {
  //   if (!chart) return;

  //   if (options) {
  //     chart.options = { ...options };
  //   }

  //   chart.config.data = data;
  //   chart.update();
  // }, [chart, data, options]);

  useEffect(() => {
    console.log('inside');
    if (!canvas.current) return undefined;

    const chartInstance = new ChartJS(canvas.current, {
      type,
      data,
      options,
      ...rest,
    });

    setChart(chartInstance);

    return () => {
      // can't use `chart.destroy()` because it's undefined
      chartInstance.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   initChart();
  //   return destroyChart;
  // }, [initChart, destroyChart]);

  // useEffect(() => {
  //   updateChart();
  // }, [updateChart]);

  return <canvas ref={canvas} />;
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    label: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  options: PropTypes.shape({}).isRequired,
};

export default Chart;
