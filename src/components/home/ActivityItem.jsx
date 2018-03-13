import React from 'react';
import PropTypes from 'prop-types';

import '../../scss/home/ActivityItem.scss';

const ActivityItem = props => (
  <li className="service-item no-borders activity">

    <span className="activity-icon">
      <img src={props.icon} alt="" />
    </span>

    <div className="activity-data">

      <span className="activity-author">{props.user}</span>

      <span className="activity-type">{props.type}</span>

      <span className="activity-target">{props.target}</span>

      <div className="activity-time">{props.timeAgo}</div>

    </div>

  </li>
);
ActivityItem.propTypes = {
  icon: PropTypes.string,
  user: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
  timeAgo: PropTypes.string
};

ActivityItem.defaultProps = {
  icon: '',
  user: '',
  type: '',
  target: '',
  timeAgo: ''
};

export default ActivityItem;
