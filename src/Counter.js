import React, { Component } from "react";

// function Counter() {
// return <button>I have been clicked 0 times.</button>;
// }

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    });
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{
          margin: "1rem",
          background: this.props.bgColor,
          border: 0,
          color: "white",
        }}
      >
        I have been clicked {this.state.timesClicked} times.
      </button>
    );
  }
}

export default Counter;
