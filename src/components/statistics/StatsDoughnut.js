import React, { Component } from 'react';

import { Col } from 'reactstrap';

import { Doughnut } from 'react-chartjs-2';

const StatsDoughnut = (props) => {

    const number = props.data.datasets[0].data[0];
    console.log(number);
    return <Col xs='12' sm='4' className='chart-item d-flex align-items-center'>

        <div className='chart-content'>

            <Doughnut data={props.data} options={{
                legend: {display: false},
                cutoutPercentage: 80,
                tooltips: {enabled: false}
            }}/>

        </div>

        <div className='d-flex flex-column align-items-center'>

            <span className='chart-legend number gut-m'>{number + '$'}</span>

            <span className='chart-legend gut-m'>{props.legend}</span>

        </div>


    </Col>;
};

export default StatsDoughnut;