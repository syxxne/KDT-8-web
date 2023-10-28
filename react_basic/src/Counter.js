import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };

  //     // 바인딩
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     this.setState({ number: this.state.number + 1 });
  //   }

  state = {
    number: 0,
  };

  handleDecrement = () => {
    // this.setState({ number: this.state.number - 1 });
    this.setState((prevState) => ({ number: prevState.number - 1 }));
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </div>
    );
  }
}

export default Counter;
