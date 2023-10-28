import { Component } from "react";

class TestComponent extends Component {
  render() {
    const name = "이서연";
    let style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12",
    };
    return (
      <>
        <div style={style}>{name}</div>
      </>
    );
  }
}

export default TestComponent;
