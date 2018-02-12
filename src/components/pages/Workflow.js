import React, { Component } from 'react';

import '../../scss/workflow-page/Workflow.scss';

import { Container } from 'reactstrap';

import TaskItem from '../home-page/TaskItem';

import map from 'lodash/map';

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
            items1: getItems(6),
            items2: getItems(6, 6)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        console.log(result);
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        let newItems1, newItems2;

        if (result.destination.droppableId==='droppable1') {

            if (result.source.droppableId==='droppable1') {
                newItems1 = reorder(
                    this.state.items1,
                    result.source.index,
                    result.destination.index
                );
                this.setState({
                    items1: newItems1
                })
            } else {
                newItems2 = remove(this.state.items2, result.source.index);
                newItems1 = insert(this.state.items1, result.destination.index,
                    this.state.items2[result.source.index]);
                this.setState({
                    items1: newItems1,
                    items2: newItems2
                })
            }
        }

        else if (result.destination.droppableId==='droppable2') {

            if (result.source.droppableId==='droppable2') {
                newItems2 = reorder(
                    this.state.items2,
                    result.source.index,
                    result.destination.index
                );
                this.setState({
                    items2: newItems2
                })
            } else {
                newItems1 = remove(this.state.items1, result.source.index);

                newItems2 = insert(this.state.items2, result.destination.index,
                    this.state.items1[result.source.index]);
                this.setState({
                    items1: newItems1,
                    items2: newItems2
                })
            }

        }

    }

    //erase when finish

    render() {
        return (
            <section className='workflow'>

                <Container>

                    <DragDropContext onDragEnd={this.onDragEnd}
                    >
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Droppable direction='vertical' droppableId="droppable1">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    >
                                    {this.state.items1.map((item, index) => {
                                        return <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <TaskItem
                                                            name='xxxxx'
                                                            timeStatus='xxxxxxxxx'
                                                            locate={'/tasks/' + 'xxxxx'}
                                                            isActive={true}
                                                            key={item.id}/>
                                                    </div>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Draggable>
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>

                        <Droppable direction='vertical' droppableId="droppable2">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                >
                                    {this.state.items2.map((item, index) => {
                                        return <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <TaskItem
                                                            name='xxxxx'
                                                            timeStatus='xxxxxxxxx'
                                                            locate={'/tasks/' + 'xxxxx'}
                                                            isActive={true}
                                                            key={item.id}/>
                                                    </div>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Draggable>
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>

                        </div>

                    </DragDropContext>


                </Container>

            </section>
        );
    }
}

export default Workflow;