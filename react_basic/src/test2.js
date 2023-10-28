import { Component } from "react";
import img from "./dog.jpg";

class Test2Component extends Component {
  render() {
    let style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요.</h2>
          <img src={img} alt="dog" />
        </div>
      </>
    );
  }
}

export default Test2Component;
