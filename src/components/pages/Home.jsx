import React from 'react';
import { Container, Row } from 'reactstrap';
import store from '../../redux-stuff/store';
import { connect } from 'react-redux';
import DoughnutChart from '../home/DoughnutChart';
import ScatterChart from '../home/ScatterChart';
import TaskList from '../home/TaskList';
import MessagesList from '../home/MessagesList';
import ActivityList from '../home/ActivityList';

import '../../scss/home/Home.scss';

const mapStateToProps = state => {
  return {
    isFixedMenuOpen: state.menu.isFixedMenuOpen
  }
};

const Home = (props) => {
  return <section className={`home page-content ${props.isFixedMenuOpen? 'opened' : ''}`}>

    <Container>

      <h2 className="home-greeting">
        Hello {localStorage.getItem('currentUser')}!
      </h2>

      <Row>

        <DoughnutChart/>

        <ScatterChart title="Report"/>

      </Row>

      <Row>

        <TaskList/>

        <MessagesList/>

        <ActivityList/>

      </Row>

    </Container>

  </section>
};
export default connect(mapStateToProps)(Home);

