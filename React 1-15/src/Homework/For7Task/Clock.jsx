import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { time: new Date() };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    console.log('render');
    return <h1>{this.state.time.toLocaleTimeString()}</h1>;
  }
}

export default Clock;
