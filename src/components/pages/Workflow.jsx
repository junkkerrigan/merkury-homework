import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import keyIndex from 'react-key-index';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import store from '../../store';
import { connect } from 'react-redux';
import TaskItem from '../home/TaskItem';

import '../../scss/Workflow.scss';

const mapStateToProps = state => {
  return {
    isFixedMenuOpen: state.menu.isFixedMenuOpen
  }
};

class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        toDo: keyIndex([
          {
            name: 'New website for JCD.pl',
            time: '5 days left',
            status: 'work',
          },
          {
            name: 'Free PSD Template vol. 3',
            time: '5 days left',
            status: 'work',
          },
          {
            name: 'New logo for Google',
            time: '5 days left',
            status: 'work',
          },
          {
            name: 'New website for Windu.org',
            time: '5 days left',
            status: 'work',
          },
          {
            name: 'Free PSD Template vol. 2',
            time: '5 days left',
            status: 'work',
          },
          {
            name: 'Iconset Vol. 3',
            time: '5 days left',
            status: 'work',
          },
        ], 1),
        inProgress: keyIndex([
          {
            name: 'New logo for Apple',
            time: '1 day left',
            status: 'work',
          },
          {
            name: 'Daily UI Kit',
            time: '5 days left',
            status: 'work',
          },
          {
            name: 'Business Cards',
            time: '2 days delays',
            status: 'delay',
          },
        ], 2),
        completed: keyIndex([
          {
            name: 'Free PSD Template vol. 1',
            time: '5 days left',
            status: 'completed',
          },
          {
            name: 'Iconset vol. 1',
            time: '5 days left',
            status: 'completed',
          },
          {
            name: 'New website for Symu.co',
            time: '5 days left',
            status: 'completed',
          },
          {
            name: 'Iconset vol. 2',
            time: '5 days left',
            status: 'completed',
          },
        ], 3),
      },
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) return;

    const from = result.source,
      to = result.destination;

    const { tasks } = this.state;

    const [removed] = tasks[from.droppableId].splice(from.index, 1);

    if (from.droppableId === 'completed' && to.droppableId !== 'completed') {
      removed.status = to.droppableId;
    }

    if (to.droppableId === 'completed') removed.status = 'completed';

    tasks[to.droppableId].splice(to.index, 0, removed);

    this.setState({
      tasks,
    });
  }

  render() {
    return (
      <section className={`workflow page-content ${this.props.isFixedMenuOpen? 'opened' : ''}`}>

        <Container>

          <DragDropContext onDragEnd={this.onDragEnd}>

            <Row>

              <Droppable direction="vertical" droppableId="toDo">

                {provided => (

                  <Col md="4" className="workflow-section">

                    <h3 className="workflow-section-title">
                      To Do
                      <span className="number"> ({this.state.tasks.toDo.length}) </span>
                    </h3>

                    <ul
                      className="workflow-list"
                      ref={provided.innerRef}
                    >
                      {this.state.tasks.toDo.map((item, index) => (
                        <Draggable key={item._nameId} draggableId={item._nameId} index={index}>

                          {provided => (

                            <li>

                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="workflow-item-wrapper"
                              >

                                <TaskItem
                                  name={item.name}
                                  time={item.time}
                                  locate={`/tasks/${item._nameId}`}
                                  status={item.status}
                                  key={item._nameId}
                                />

                              </div>

                              {provided.placeholder}

                            </li>

                          )}

                        </Draggable>))}

                      {provided.placeholder}

                    </ul>

                  </Col>

                )}

              </Droppable>

              <Droppable direction="vertical" droppableId="inProgress">

                {provided => (

                  <Col md="4" className="workflow-section">

                    <h3 className="workflow-section-title">
                      In Progress
                      <span className="number"> ({this.state.tasks.inProgress.length}) </span>
                    </h3>

                    <ul
                      className="workflow-list"
                      ref={provided.innerRef}
                    >
                      {this.state.tasks.inProgress.map((item, index) => (
                        <Draggable key={item._nameId} draggableId={item._nameId} index={index}>

                          {provided => (

                            <li>

                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="workflow-item-wrapper"
                              >

                                <TaskItem
                                  name={item.name}
                                  time={item.time}
                                  locate={`/tasks/${item._nameId}`}
                                  status={item.status}
                                  key={item._nameId}
                                />

                              </div>

                              {provided.placeholder}

                            </li>

                          )}

                        </Draggable>))}

                      {provided.placeholder}

                    </ul>

                  </Col>

                )}

              </Droppable>

              <Droppable direction="vertical" droppableId="completed">

                {provided => (

                  <Col md="4" className="workflow-section">

                    <h3 className="workflow-section-title">
                      Completed
                      <span className="number"> ({this.state.tasks.completed.length}) </span>
                    </h3>

                    <ul
                      className="workflow-list"
                      ref={provided.innerRef}
                    >
                      {this.state.tasks.completed.map((item, index) => (
                        <Draggable key={item._nameId} draggableId={item._nameId} index={index}>

                          {provided => (

                            <li>

                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="workflow-item-wrapper"
                              >

                                <TaskItem
                                  name={item.name}
                                  time={item.time}
                                  locate={`/tasks/${item._nameId}`}
                                  status={item.status}
                                  key={item._nameId}
                                />

                              </div>

                              {provided.placeholder}

                            </li>

                          )}

                        </Draggable>))}

                      {provided.placeholder}

                    </ul>

                  </Col>

                )}

              </Droppable>

            </Row>

          </DragDropContext>

        </Container>

      </section>

    );
  }
}

export default connect(mapStateToProps)(Workflow);
