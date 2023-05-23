import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { count: 0 };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('render');
    return (
      <button onClick={this.handleClick}>
        Click me ({this.state.count})
      </button>
    );
  }
}

export default Button;
