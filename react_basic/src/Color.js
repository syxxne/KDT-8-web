import { Component } from "react";

class Color extends Component {
  state = {
    color: "black",
    text: "검은색 글씨",
  };

  handleRed = () => {
    this.setState((prevState) => ({ color: "red", text: "빨간색 글씨" }));
  };

  handleBlue = () => {
    this.setState((prevState) => ({ color: "blue", text: "파란색 글씨" }));
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.text}</h1>
        <button onClick={this.handleRed}>빨간색</button>
        <button onClick={this.handleBlue}>파란색</button>
      </div>
    );
  }
}

export default Color;
