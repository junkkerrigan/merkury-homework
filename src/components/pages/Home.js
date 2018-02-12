import React, { Component } from 'react';

import '../../scss/home-page/Home.scss';

import { Container, Row} from 'reactstrap';

import DoughnutChart from "../home-page/DoughnutChart";

import ScatterChart from '../home-page/ScatterChart';

import TaskList from "../home-page/TaskList";

import MessagesList from "../home-page/MessagesList";

import ActivityList from "../home-page/ActivityList";

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