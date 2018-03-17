import React from 'react';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import keyIndex from 'react-key-index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../redux-stuff/store';
import SidebarItem from './SidebarItem';

import '../../scss/main-layout/FixedSidebar.scss';

import homeIcon from '../../img/home-icon.png';
import workflowIcon from '../../img/workflow-icon.png';
import statisticsIcon from '../../img/statistics-icon.png';
import calendarIcon from '../../img/calendar-icon.png';
import usersIcon from '../../img/users-icon.png';
import settingsIcon from '../../img/settings-icon.png';
import logo from '../../img/entire-logo.png';

const mapStateToProps = state => {
  return {
    isFixedMenuOpen: state.menu.isFixedMenuOpen
  }
};

const FixedSidebar = (props) => {
  let linksData = [
    {
      target: '/home',
      icon: homeIcon,
      text: 'Home',
      sizes: {
        w: '18',
        h: '15.75',
      },
    },
    {
      target: '/workflow',
      icon: workflowIcon,
      text: 'Workflow',
      sizes: {
        w: '15',
        h: '14.25',
      },
    },
    {
      target: '/statistics',
      icon: statisticsIcon,
      text: 'Statistics',
      sizes: {
        w: '18',
        h: '16.5',
      },
    },
    {
      target: '/calendar',
      icon: calendarIcon,
      text: 'Calendar',
      sizes: {
        w: '15',
        h: '15',
      },
    },
    {
      target: '/users',
      icon: usersIcon,
      text: 'Users',
      sizes: {
        w: '15',
        h: '15',
      },
    },
    {
      target: '/settings',
      icon: settingsIcon,
      text: 'Settings',
      sizes: {
        w: '15.75',
        h: '16.5',
      },
    },
  ];

  linksData = keyIndex(linksData, 1);

  return (
    <aside className={`fixed-sidebar ${props.isFixedMenuOpen? 'opened' : ''}`}>

      <h1 className="fixed-sidebar-logo">
        <Link to="/home" href="/home">
          <img src={logo} width="135" height="37.5" alt="main logo" />
        </Link>
      </h1>

      <ul className="fixed-sidebar-list">

        {
          map(linksData, item => (
            <SidebarItem
              target={item.target}
              icon={item.icon}
              text={item.text}
              active={`/${props.match.params.page}`}
              sizes={item.sizes}
              key={item._targetId}
            />))
        }

      </ul>

    </aside>
  );
};

FixedSidebar.propTypes = {
  match: PropTypes.object
};

FixedSidebar.defaultProps = {
  match: {}
};

export default connect(mapStateToProps)(FixedSidebar);
