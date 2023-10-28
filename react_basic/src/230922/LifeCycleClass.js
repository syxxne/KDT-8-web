import { Component } from "react";

class MyComponent extends Component {
  // 생성될 때
  componentDidMount() {
    console.log("mount!");
  }

  // 업데이트 될 때
  componentDidUpdate() {
    console.log("update!");
  }

  // 제거될 때
  componentWillUnmount() {
    console.log("unmount!");
  }

  render() {
    return (
      <>
        <div>My Component {this.props.number}</div>
      </>
    );
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
