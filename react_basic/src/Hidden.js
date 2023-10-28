import { Component } from "react";

class Hidden extends Component {
  state = {
    visibility: "visible",
  };

  handleVisibility = () => {
    this.setState((prevState) => ({ visibility: "hidden" }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleVisibility}>사라져라</button>
        <h1 style={{ visibility: this.state.visibility }}>안녕하세요</h1>
      </div>
    );
  }
}

export default Hidden;
