import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

const StatsDoughnut = (props) => {
  const number = props.data.datasets[0].data[0];
  return (
    <Col sm="12" lg="4" className="chart-doughnut d-flex align-items-center">

      <div className="chart-content">

        <Doughnut
          data={props.data}
          options={{
            maintainAspectRatio: false,
            legend: { display: false },
            cutoutPercentage: 80,
            tooltips: { enabled: false },
          }}
          width={200}
        />

      </div>

      <div className="d-flex flex-column align-items-center">

        <span className="chart-stats-legend number">{`${number}$`}</span>

        <span className="chart-stats-legend">{props.legend}</span>

      </div>

    </Col>
  );
};

StatsDoughnut.propTypes = {
  legend: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.array),
};

StatsDoughnut.defaultProps = {
  legend: '',
  data: {},
};

export default StatsDoughnut;
