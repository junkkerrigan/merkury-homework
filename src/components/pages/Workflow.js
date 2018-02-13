import React, { Component } from 'react';

import '../../scss/workflow-page/Workflow.scss';

import { Container, Row, Col } from 'reactstrap';

import TaskItem from '../home-page/TaskItem';

import map from 'lodash/map';

import keyIndex from 'react-key-index';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const getItems = (count, plus = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `${k+plus}`,
        content: `item ${k + 1+plus}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const remove = (list, index) => {
    const result = Array.from(list);
    result.splice(index, 1);
    return result;
};

const insert = (list, index, item) => {
    const result = Array.from(list);
    result.splice(index, 0, item);
    return result;
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
                        status: 'work'
                    },
                    {
                        name: 'Free PSD Template vol. 3',
                        time: '5 days left',
                        status: 'work'
                    },
                    {
                        name: 'New logo for Google',
                        time: '5 days left',
                        status: 'work'
                    },
                    {
                        name: 'New website for Windu.org',
                        time: '5 days left',
                        status: 'work'
                    },
                    {
                        name: 'Free PSD Template vol. 2',
                        time: '5 days left',
                        status: 'work'
                    },
                    {
                        name: 'Iconset Vol. 3',
                        time: '5 days left',
                        status: 'work'
                    }
                ], 1),
                inProgress: keyIndex([
                    {
                        name: 'New logo for Apple',
                        time: '1 day left',
                        status: 'work'
                    },
                    {
                        name: 'Daily UI Kit',
                        time: '5 days left',
                        status: 'work'
                    },
                    {
                        name: 'Business Cards',
                        time: '2 days delays',
                        status: 'delay'
                    }
                ], 2),
                completed: keyIndex([
                    {
                        name: 'Free PSD Template vol. 1',
                        time: '5 days left',
                        status: 'completed'
                    },
                    {
                        name: 'Iconset vol. 1',
                        time: '5 days left',
                        status: 'completed'
                    },
                    {
                        name: 'New website for Symu.co',
                        time: '5 days left',
                        status: 'completed'
                    },
                    {
                        name: 'Iconset vol. 2',
                        time: '5 days left',
                        status: 'completed'
                    }
                ], 3)
            }
        };
        this.onDragEnd = this.onDragEnd.bind(this);
        this.cutString = this.cutString.bind(this);
        this.findSpace = this.findSpace.bind(this);
    }

    cutString(string, len) {
        return (string.length>len)?
            string.substring(0,this.findSpace(string, len)) + ' (...)' : string;
    }

    findSpace(string, idx) {
        let ind=idx;
        for (let i=idx;string[i]!==' ' && i>=0;i--) ind--;
        return ind;
    }

    onDragEnd(result) {
        if (!result.destination) return;

        const from=result.source, to=result.destination;

        let tasks=this.state.tasks;

        let [removed] = tasks[from.droppableId].splice(from.index, 1);

        if (from.droppableId==='completed' && to.droppableId!=='completed')
            removed.status=to.droppableId;


        if (to.droppableId==='completed') removed.status='completed';

        tasks[to.droppableId].splice(to.index, 0, removed);

        this.setState({
            tasks
        })
    }

    //erase when finish

    render() {

        return (
        <section className='workflow'>

        <Container>

        <DragDropContext onDragEnd={this.onDragEnd}>

            <Row>

                <Droppable direction='vertical' droppableId="toDo">

                    {(provided, snapshot) => (

                        <Col md='4' className='workflow-section'>

                            <h3 className='workflow-section-title'>
                                To Do
                                <span className='number'> ({this.state.tasks.toDo.length}) </span>
                            </h3>

                            <ul className='workflow-list'
                                ref={provided.innerRef}
                            >
                                {this.state.tasks.toDo.map((item, index) => {

                                    return <Draggable key={item._nameId} draggableId={item._nameId} index={index}>

                                        {(provided, snapshot) => (

                                            <li>

                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps} className='workflow-item-wrapper'>

                                                    <TaskItem
                                                        name={this.cutString(item.name, 30)}
                                                        time={item.time}
                                                        locate={'/tasks/' + item._nameId}
                                                        status={item.status}
                                                        key={item._nameId}/>

                                                </div>

                                                {provided.placeholder}

                                            </li>

                                        )}

                                    </Draggable>

                                })}

                                {provided.placeholder}

                            </ul>

                        </Col>

                    )}

                </Droppable>

                <Droppable direction='vertical' droppableId="inProgress">

                    {(provided, snapshot) => (

                        <Col md='4' className='workflow-section'>

                            <h3 className='workflow-section-title'>
                                In Progress
                                <span className='number'> ({this.state.tasks.inProgress.length}) </span>
                            </h3>

                            <ul className='workflow-list'
                                ref={provided.innerRef}
                            >
                                {this.state.tasks.inProgress.map((item, index) => {

                                    return <Draggable key={item._nameId} draggableId={item._nameId} index={index}>

                                        {(provided, snapshot) => (

                                            <li>

                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps} className='workflow-item-wrapper'>

                                                    <TaskItem
                                                        name={this.cutString(item.name, 30)}
                                                        time={item.time}
                                                        locate={'/tasks/' + item._nameId}
                                                        status={item.status}
                                                        key={item._nameId}/>

                                                </div>

                                                {provided.placeholder}

                                            </li>

                                        )}

                                    </Draggable>

                                })}

                                {provided.placeholder}

                            </ul>

                        </Col>

                    )}

                </Droppable>

                <Droppable direction='vertical' droppableId="completed">

                    {(provided, snapshot) => (

                    <Col md='4' className='workflow-section'>

                        <h3 className='workflow-section-title'>
                            Completed
                            <span className='number'> ({this.state.tasks.completed.length}) </span>
                        </h3>

                        <ul className='workflow-list'
                            ref={provided.innerRef}
                        >
                        {this.state.tasks.completed.map((item, index) => {

                        return <Draggable key={item._nameId} draggableId={item._nameId} index={index}>

                            {(provided, snapshot) => (

                                <li>

                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps} className='workflow-item-wrapper'>

                                        <TaskItem
                                        name={this.cutString(item.name, 30)}
                                        time={item.time}
                                        locate={'/tasks/' + item._nameId}
                                        status={item.status}
                                        key={item._nameId}/>

                                    </div>

                                    {provided.placeholder}

                                </li>

                            )}

                        </Draggable>

                        })}

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

export default Workflow;