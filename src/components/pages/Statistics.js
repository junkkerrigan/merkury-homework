import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import ScatterChart from '../home/ScatterChart';

import '../../scss/statistics/Statistics.scss';

import { Scatter, Doughnut } from 'react-chartjs-2';

const createScatterChartData = (rawData, color) => {
    return {
        labels: '',
        datasets: [
            {
                label: '',
                fill: false,
                backgroundColor: '#fff',
                pointRadius: 0,
                borderColor: color,
                showLine: true,
                data: rawData
            }
        ]
    }
};

const createDoughnutChartData = (rawData) => {
    return {
        datasets: [{
            data: rawData.data,
            backgroundColor: rawData.bg,
            hoverBackgroundColor: rawData.bg,
            borderWidth: 0
        }]
    };
};

const doughnutChartData = {
    'direct': {
        data: [
            45,
            55
        ],
        bg: [
            '#5584ff',
            '#dadee7'
        ]
    },
    'channel1': {
        data: [
            20,
            80
        ],
        bg: [
            '#aa5fb9',
            '#dadee7'
        ]
    },
    'channel2': {
        data: [
            25,
            75
        ],
        bg: [
            '#f83c7b',
            '#dadee7'
        ]
    },
};

const scatterChartData = {
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
        { x: 39, y: 175 },
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

class Statistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataTotalSales: createScatterChartData(scatterChartData['month'], '#5584ff'),
            dataViews: createScatterChartData(scatterChartData['month'], '#f83c7b'),
            dataSales: [
                createDoughnutChartData(doughnutChartData['direct']),
                createDoughnutChartData(doughnutChartData['channel1']),
                createDoughnutChartData(doughnutChartData['channel2'])
            ]
        }

    }

    render() {
        return (
          <section className='statistics'>

              <Container>

                  <div className='content-wrapper'>

                      <div className='d-flex justify-content-between align-items-center'>

                          <h2 className='statistics-title'>
                              Lorem Ipsum Stats
                          </h2>

                          <div className='chart-period-wrapper visible'>

                              <select className='chart-period'>

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

                      <Row>

                          <Col sm={12} md={5} className='chart-wrapper'>

                              <div className='chart no-gut-p'>

                                  <div className='d-flex align-items-center chart-half'>

                                      <div className='d-flex flex-column align-items-center'>

                                      <span className='chart-legend number'>
                                          1,560
                                      </span>

                                      <span className='chart-legend'>
                                          Sales
                                      </span>

                                      </div>

                                      <div className='chart-content'>

                                          <Scatter data={this.state.dataTotalSales}
                                                   options={{
                                                       maintainAspectRatio: false,
                                                       legend: {display: false},
                                                       scales: {
                                                           yAxes: [{
                                                               display: false
                                                           }],
                                                           xAxes: [{
                                                               display: false
                                                           }]
                                                       }
                                                   }} height={100}/>

                                      </div>

                                  </div>

                                  <div className='d-flex align-items-center chart-half'>

                                      <div className='d-flex flex-column align-items-center'>

                                      <span className='chart-legend number'>
                                          3,230
                                      </span>

                                      <span className='chart-legend'>
                                          Views
                                      </span>

                                      </div>

                                      <div className='chart-content'>

                                          <Scatter data={this.state.dataViews}
                                                   options={{
                                                       maintainAspectRatio: false,
                                                       legend: {display: false},
                                                       scales: {
                                                           yAxes: [{
                                                               display: false
                                                           }],
                                                           xAxes: [{
                                                               display: false
                                                           }]
                                                       }
                                                   }} height={100}/>

                                      </div>

                                  </div>

                              </div>

                          </Col>

                          <ScatterChart title='Active users'/>

                      </Row>

                      <Row noGutters>

                          <div className='chart changeable'>

                              <h5 className='chart-title'>Total sales</h5>

                              <Row noGutters className='chart-height'>

                                  <Col xs='12' sm='4' className='chart-item d-flex align-items-center'>

                                      <div className='chart-content'>

                                          <Doughnut data={this.state.dataSales[0]}
                                                    options={{
                                                        legend: {
                                                            display: false
                                                        },
                                                        cutoutPercentage: 80,
                                                        tooltips: {
                                                            enabled: false
                                                        }
                                                    }}/>

                                      </div>

                                      <div className='d-flex flex-column align-items-center'>

                                      <span className='chart-legend number gut-m'>
                                          2,300$
                                      </span>

                                      <span className='chart-legend gut-m'>
                                          Direct Sales
                                      </span>

                                      </div>


                                  </Col>

                                  <Col xs='12' sm='4' className='chart-item d-flex align-items-center'>

                                      <div className='chart-content'>

                                          <Doughnut data={this.state.dataSales[1]}
                                                    options={{
                                                        legend: {
                                                            display: false
                                                        },
                                                        cutoutPercentage: 80,
                                                        tooltips: {
                                                            enabled: false
                                                        }
                                                    }}/>

                                      </div>

                                      <div className='d-flex flex-column align-items-center'>

                                      <span className='chart-legend number gut-m'>
                                          980$
                                      </span>

                                      <span className='chart-legend gut-m'>
                                          Channel Sales
                                      </span>

                                      </div>


                                  </Col>

                                  <Col xs='12' sm='4' className='chart-item d-flex align-items-center'>

                                      <div className='chart-content'>

                                          <Doughnut data={this.state.dataSales[2]}
                                                    options={{
                                                        legend: {
                                                            display: false
                                                        },
                                                        cutoutPercentage: 80,
                                                        tooltips: {
                                                            enabled: false
                                                        }
                                                    }}/>

                                      </div>

                                      <div className='d-flex flex-column align-items-center'>

                                      <span className='chart-legend number gut-m'>
                                          1,250$
                                      </span>

                                      <span className='chart-legend gut-m'>
                                          Channel Sales
                                      </span>

                                      </div>


                                  </Col>

                              </Row>

                          </div>

                      </Row>

                  </div>

              </Container>

          </section>
        );
    }
}

export default Statistics;