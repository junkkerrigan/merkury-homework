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

                 <div className='content-wrapper'>

                     <h2 className='home-greeting'>
                         Hello {localStorage.getItem('currentUser')}!
                     </h2>

                     <Row>

                         <DoughnutChart />

                         <ScatterChart />

                     </Row>

                     <Row>

                         <TaskList />

                         <MessagesList />

                         <ActivityList />

                     </Row>

                 </div>

              </Container>

          </section>
      );
    }
}

export default Home;