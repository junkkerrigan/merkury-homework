import React from 'react';
import PropTypes from 'prop-types';
import { Scatter } from 'react-chartjs-2';

const StatsScatter = props => (
  <div className="d-flex align-items-center chart-half">

    <div className="chart-scatter">

      <div className="d-flex flex-column align-items-center">

        <span className="chart-stats-legend number">{props.number}</span>

        <span className="chart-stats-legend">{props.legend}</span>

      </div>

    </div>

    <div className="chart-scatter">

      <Scatter
        data={props.data}
        options={{
          maintainAspectRatio: false,
          legend: { display: false },
          scales: {
            yAxes: [{ display: false }],
            xAxes: [{ display: false }]
          }
          }}
        height={125}
      />

    </div>

  </div>
);

StatsScatter.propTypes = {
  number: PropTypes.number,
  legend: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.array)
};

StatsScatter.defaultProps = {
  number: 0,
  legend: '',
  data: {}
};

export default StatsScatter;
