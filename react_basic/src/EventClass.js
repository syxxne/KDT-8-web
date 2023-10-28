import { Component } from "react";

class EventClass extends Component {
  // 생성자
  constructor(props) {
    // 부모 클래스인 Component의 생성자 호출
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    alert("클래스형 컴포넌트");
  }

  // 화살표 함수는 바인딩하지 않아도 this 참조 가능
  // 일반형은 this 참조하기 위해서는 바인딩 필수
  // 이러한 이유 때문에 화살표 함수 사용하는 경우가 많음
  handleClick2 = () => {
    console.log("화살표 함수", this);
    alert("클래스형 컴포넌트 2번");
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭 class</button>
        <button onClick={this.handleClick2}>클릭 class 2번</button>
      </>
    );
  }
}

export default EventClass;
