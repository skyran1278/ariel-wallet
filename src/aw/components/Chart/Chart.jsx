import ChartJS from 'chart.js/auto';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const { type, data, options, ...rest } = this.props;
    this.chart = new ChartJS(this.canvas.current, {
      type,
      data,
      options,
      ...rest,
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    const { data, options } = this.props;

    if (options) {
      this.chart.options = options;
    }

    this.chart.data = data;
    // this.chart.data.labels = data.labels;
    // this.chart.data.datasets[0].data = this.props.data.map((d) => d.value);
    this.chart.update();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <canvas ref={this.canvas} />;
  }
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  options: PropTypes.shape({}),
};

Chart.defaultProps = {
  options: undefined,
};

export default Chart;
