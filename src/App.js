import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: 'd'
        }
    }
    render() {
        return (
            <p>{this.state.d}</p>
        );
    }
}

export default App;

