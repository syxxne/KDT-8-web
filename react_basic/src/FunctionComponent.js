import PropTypes from "prop-types";

// function 컴포넌트명 {} or const 컴포넌트명 = () => {}
function FunctionComponent({ name, age, children }) {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <div>{children}</div>
    </>
  );
}

// function FunctionComponent(props) {
//   return (
//     <>
//       <div>{props.name}</div>
//       <div>{props.age}</div>
//       <div>{props.children}</div>
//     </>
//   );
// }

FunctionComponent.defaultProps = {
  name: "kdt",
  age: 10,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
};

export default FunctionComponent;
