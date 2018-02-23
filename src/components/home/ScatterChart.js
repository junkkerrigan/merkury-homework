import React, { Component } from 'react';

import { Scatter } from 'react-chartjs-2';

import { Col } from 'reactstrap';

import '../../scss/home/ScatterChart.scss';

import map from 'lodash/map';

const createChartData = (rawData) => {
  return {
      labels: '',
      datasets: [
          {
              label: '',
              fill: false,
              backgroundColor: '#fff',
              pointRadius: 0,
              borderColor: '#5584ff',
              showLine: true,
              data: rawData
          }
      ]
  }
};

const chartData = {
    'year': [
        { x: 1, y: 175 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ],
    '6 months': [
        { x: 1, y: 175 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 180 },
    ],
    '3 months': [
        { x: 1, y: 175 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ],
    'month': [
        { x: 1, y: 175 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ],
    'week': [
        { x: 1, y: 175 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ],
};

class ScatterChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPeriodData: createChartData(chartData['year'])
        };

        this.onPeriodChoose = this.onPeriodChoose.bind(this);
    }

    onPeriodChoose(event) {
        this.setState({
            currentPeriodData: createChartData(chartData[event.target.value])
        });
    }

    render() {
        return (
          <Col className='chart-wrapper' sm='12' md='7'>

              <div className='chart scatter'>

                  <div className='chart-data'>

                      <h5 className='chart-title'>Report</h5>

                      <div className='chart-period-wrapper'>

                          <select className='chart-period' onChange={this.onPeriodChoose}>

                              <option value='year'>
                                  Last year
                              </option>

                              <option value='6 months'>
                                  Last 6 months
                              </option>

                              <option value='3 months'>
                                  Last 3 months
                              </option>

                              <option value='month'>
                                  Last month
                              </option>

                              <option value='week'>
                                  Last week
                              </option>

                          </select>

                      </div>

                  </div>

                  <div className='chart-content-wrapper'>

                      <Scatter data={this.state.currentPeriodData} options={{
                          maintainAspectRatio: false,
                          legend: {display: false}
                      }} height={150}/>

                  </div>

              </div>

          </Col>
        );
    }
}

export default ScatterChart;