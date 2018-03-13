import React, { Component } from 'react';
import map from 'lodash/map';
import keyIndex from 'react-key-index';
import { Doughnut } from 'react-chartjs-2';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

import '../../scss/home/DoughnutChart.scss';

const createChartData = rawData => ({
  labels: rawData.labels,
  datasets: [{
    data: rawData.data,
    backgroundColor: rawData.bg,
    hoverBackgroundColor: rawData.bg,
    borderWidth: 0,
  }],
});

const ChartLabel = props => (
  <li className="chart-legend-item">
    <span
      className="chart-legend-color"
      style={{ background: props.color }}
    />

    <span className="chart-legend-value">
      {props.value}
    </span>

  </li>
);

ChartLabel.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number
};

ChartLabel.defaultProps = {
  color: '',
  value: 0
};

const chartData = {
  year: {
    labels: [
      'Websites',
      'Logo',
      'Social media',
      'Adwords',
      'E-commerce',
    ],
    data: [
      170,
      170,
      540,
      340,
      340,
    ],
    bg: [
      '#25396e',
      '#5584ff',
      '#4b74e0',
      '#3755a4',
      '#4164c2',
    ],
  },
  '6 months': {
    labels: [
      'Websites',
      'Logo',
      'Social media',
      'E-commerce',
      'Adwords',
    ],
    data: [
      100,
      100,
      500,
      300,
      300,
    ],
    bg: [
      '#25396e',
      '#5584ff',
      '#4b74e0',
      '#3755a4',
      '#4164c2',
    ],
  },
  '3 months': {
    labels: [
      'Websites',
      'Logo',
      'Adwords',
      'Social media',
      'E-commerce',
    ],
    data: [
      60,
      60,
      300,
      200,
      190,
    ],
    bg: [
      '#25396e',
      '#5584ff',
      '#4b74e0',
      '#3755a4',
      '#4164c2',
    ],
  },
  month: {
    labels: [
      'Websites',
      'Logo',
      'Adwords',
      'E-commerce',
      'Social media',
    ],
    data: [
      40,
      40,
      100,
      90,
      80,
    ],
    bg: [
      '#25396e',
      '#5584ff',
      '#4b74e0',
      '#3755a4',
      '#4164c2',
    ],
  },
  week: {
    labels: [
      'Websites',
      'Adwords',
      'Logo',
      'E-commerce',
      'Social media',
    ],
    data: [
      40,
      10,
      5,
      4,
      20,
    ],
    bg: [
      '#25396e',
      '#5584ff',
      '#4b74e0',
      '#3755a4',
      '#4164c2',
    ],
  },
};

class DoughnutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPeriodData: createChartData(chartData.year),
      k: '',
    };

    this.onPeriodChoose = this.onPeriodChoose.bind(this);
    this.countTotalSales = this.countTotalSales.bind(this);
  }

  componentWillMount() {
    this.setState({
      k: keyIndex(this.state.currentPeriodData.labels, 1),
    });
  }

  onPeriodChoose(event) {
    this.setState({
      currentPeriodData: createChartData(chartData[event.target.value]),
    });
  }

  countTotalSales() {
    let total = 0;
    map(this.state.currentPeriodData.datasets[0].data, (item) => { total += item; });
    total = total.toString();
    for (let i = total.length - 3; i > 0; i -= 3) {
      total = `${total.substr(0, i)},${
        total.substr(i)}`;
    }
    return total;
  }

  render() {
    return (
      <Col
        className="chart-wrapper"
        sm="12"
        md={{ size: 10, offset: 1 }}
        lg={{ size: 5, offset: 0 }}
      >

        <div className="chart doughnut">

          <div className="chart-data">

            <h5 className="chart-title">Your sales</h5>

            <div className="chart-period-wrapper">

              <select className="chart-period" onChange={this.onPeriodChoose}>

                <option value="year">
                  Last year
                </option>

                <option value="6 months">
                  Last 6 months
                </option>

                <option value="3 months">
                  Last 3 months
                </option>

                <option value="month">
                  Last month
                </option>

                <option value="week">
                  Last week
                </option>

              </select>

            </div>

          </div>

          <div className="chart-content-wrapper">

            <div className="chart-content">

              <div className="chart-total">

                {this.countTotalSales()}

                <span className="small">Sales</span>

              </div>

              <Doughnut
                data={this.state.currentPeriodData}
                options={{
                  legend: { display: false, },
                  cutoutPercentage: 65,
                  maintainAspectRatio: false,
                  tooltips: { enabled: false, },
                }}
                height={250}
              />

            </div>

            <ul className="chart-legend">

              {
                map(this.state.currentPeriodData.labels, (item, index) => (
                  <ChartLabel
                    color={this.state.currentPeriodData.datasets[0].backgroundColor[index]}
                    value={item}
                    key={this.state.k[index].id}
                  />))
              }

            </ul>

          </div>

        </div>

      </Col>
    );
  }
}

export default DoughnutChart;
