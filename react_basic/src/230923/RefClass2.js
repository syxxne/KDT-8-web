import { Component, createRef } from "react";

class RefClass2 extends Component {
  myInput = createRef();

  handleFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus(createRef)</button>
      </>
    );
  }
}

export default RefClass2;
