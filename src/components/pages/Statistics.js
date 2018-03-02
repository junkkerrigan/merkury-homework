import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import '../../scss/statistics/Statistics.scss';

import StatsScatter from '../statistics/StatsScatter';
import StatsDoughnut from '../statistics/StatsDoughnut';
import ScatterChart from '../home/ScatterChart';

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
        ],

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

const doughnutChartData =  {
    'year': {
        direct: {
            data: [
                40,
                60
            ],
            bg: [
                '#5584ff',
                '#dadee7'
            ]
        },
        channel1: {
            data: [
                10,
                90
            ],
            bg: [
                '#aa5fb9',
                '#dadee7'
            ]
        },
        channel2: {
            data: [
                40,
                60
            ],
            bg: [
                '#f83c7b',
                '#dadee7'
            ]
        }
    },
    '6 months': {
        direct: {
            data: [
                15,
                85
            ],
            bg: [
                '#5584ff',
                '#dadee7'
            ]
        },
        channel1: {
            data: [
                70,
                80
            ],
            bg: [
                '#aa5fb9',
                '#dadee7'
            ]
        },
        channel2: {
            data: [
                5,
                95
            ],
            bg: [
                '#f83c7b',
                '#dadee7'
            ]
        }
    },
    '3 months': {
        direct: {
            data: [
                50,
                50
            ],
            bg: [
                '#5584ff',
                '#dadee7'
            ]
        },
        channel1: {
            data: [
                25,
                75
            ],
            bg: [
                '#aa5fb9',
                '#dadee7'
            ]
        },
        channel2: {
            data: [
                15,
                85
            ],
            bg: [
                '#f83c7b',
                '#dadee7'
            ]
        }
    },
    'month': {
        direct: {
            data: [
                2300,
                2800
            ],
            bg: [
                '#5584ff',
                '#dadee7'
            ]
        },
        channel1: {
            data: [
                980,
                4120
            ],
            bg: [
                '#aa5fb9',
                '#dadee7'
            ]
        },
        channel2: {
            data: [
                1250,
                3850
            ],
            bg: [
                '#f83c7b',
                '#dadee7'
            ]
        }
    },
    'week': {
        direct: {
            data: [
                40,
                60
            ],
            bg: [
                '#5584ff',
                '#dadee7'
            ]
        },
        channel1: {
            data: [
                15,
                85
            ],
            bg: [
                '#aa5fb9',
                '#dadee7'
            ]
        },
        channel2: {
            data: [
                35,
                65
            ],
            bg: [
                '#f83c7b',
                '#dadee7'
            ]
        }
    }
};

const scatterChartData = {
    'year': [
        { x: 11, y: 175 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ],
    '6 months': [
        { x: 1, y: 15 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 180 },
    ],
    '3 months': [
        { x: 1, y: 17 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ],
    'month': [
        { x: 39, y: 17 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 218 },
    ],
    'week': [
        { x: 1, y: 175 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 16, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ]
};

class Statistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSales: {
                data: createScatterChartData(scatterChartData['month'], '#5584ff'),
                number: 1560
            },
            totalViews: {
                data: createScatterChartData(scatterChartData['month'], '#f83c7b'),
                number: 3230
            },
            sales: {
                direct: createDoughnutChartData(doughnutChartData['month'].direct),
                channel1: createDoughnutChartData(doughnutChartData['month'].channel1),
                channel2: createDoughnutChartData(doughnutChartData['month'].channel2)
            },
            period: 'month'
        };

        this.onPeriodChange = this.onPeriodChange.bind(this)
    }

    onPeriodChange(event) {
        const val = event.target.value;
        this.setState({
            totalSales: {
                data: createScatterChartData(scatterChartData[val], '#5584ff'),
                number: this.state.totalSales.number
            },
            totalViews: {
                data: createScatterChartData(scatterChartData[val], '#f83c7b'),
                number: this.state.totalViews.number
            },
            sales: {
                direct: createDoughnutChartData(doughnutChartData[val].direct),
                channel1: createDoughnutChartData(doughnutChartData[val].channel1),
                channel2: createDoughnutChartData(doughnutChartData[val].channel2)
            },
            period: val
        })
    }

    render() {

        const { totalSales, totalViews, sales } = this.state;
        return (
          <section className='statistics page-content'>

              <Container>

                  <div className='content-wrapper'>

                      <div className='d-flex justify-content-between align-items-center'>

                          <h2 className='statistics-title'>
                              Lorem Ipsum Stats
                          </h2>

                          <div className='chart-period-wrapper visible'>

                              <select className='chart-period' onChange={this.onPeriodChange}>

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

                                  <StatsScatter number={totalSales.number}
                                      legend='Sales'
                                      data={totalSales.data}/>

                                  <StatsScatter number={totalViews.number}
                                      legend='Views'
                                      data={totalViews.data}/>

                              </div>

                          </Col>

                          <ScatterChart title='Active users' period={this.state.period} />

                      </Row>

                      <Row noGutters>

                          <div className='chart changeable'>

                              <h5 className='chart-title'>Total sales</h5>

                              <Row noGutters className='chart-height'>

                                  <StatsDoughnut data={sales.direct} legend='Direct sales'/>

                                  <StatsDoughnut data={sales.channel1} legend='Channel sales'/>

                                  <StatsDoughnut data={sales.channel2} legend='Channel sales'/>

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