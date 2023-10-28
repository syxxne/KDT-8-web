import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  render() {
    let style = { color: "red" };
    return (
      <>
        <h1>
          좋아하는 음식 : <span style={style}>{this.props.food}</span>
        </h1>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  food: "치킨",
};

ClassComponent.propTypes = {
  name: PropTypes.string,
};

export default ClassComponent;
