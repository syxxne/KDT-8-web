import img from "./book.jpg";

function FunctionComponent({ title, author, price, type }) {
  return (
    <>
      <div>
        <h1>이번주 베스트셀러</h1>
        <img src={img} width="100px" height="150px" alt="book" />
        <h3>{title}</h3>
        <h4>저자: {author}</h4>
        <h4>판매가: {price}원</h4>
        <h4>구분: {type}</h4>
      </div>
    </>
  );
}

export default FunctionComponent;
