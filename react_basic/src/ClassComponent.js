import { Component } from "react"; // 1번
// import React form "react" // 2번
import PropTypes from "prop-types";

// class형 컴포넌트
// class 컴포넌트명 extends Component{}
// class ClassComponent extends React.Component {} // 2번
class ClassComponent extends Component {
  // 1번

  // 클래스형 컴포넌트에서는 render 함수 필수
  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
      </>
    );
  }

  // static defaultProps = {
  //   name: "홍길동",
  // };

  // static propTypes = {
  //   name: PropTypes.string,
  // };
}

ClassComponent.defaultProps = {
  name: "홍길동",
};

ClassComponent.propTypes = {
  name: PropTypes.string,
};

export default ClassComponent;
