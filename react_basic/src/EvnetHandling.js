import { Component } from "react";

class EventHandling extends Component {
  handleClick = () => {
    console.log("화살표 함수", this);
    alert(this.props.message);
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Show Message</button>
      </>
    );
  }
}

export default EventHandling;
