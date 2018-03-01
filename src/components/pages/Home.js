import React, { Component } from 'react';

import '../../scss/home/Home.scss';

import { Container, Row} from 'reactstrap';

import DoughnutChart from "../home/DoughnutChart";

import ScatterChart from '../home/ScatterChart';

import TaskList from "../home/TaskList";

import MessagesList from "../home/MessagesList";

import ActivityList from "../home/ActivityList";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

      return (
          <section className='home'>

              <Container>

                 <h2 className='home-greeting'>
                     Hello {localStorage.getItem('currentUser')}!
                 </h2>

                 <Row>

                     <DoughnutChart />

                     <ScatterChart title='Report'/>

                 </Row>

                 <Row>

                     <TaskList />

                     <MessagesList />

                     <ActivityList />

                 </Row>

              </Container>

          </section>
      );
    }
}

export default Home;