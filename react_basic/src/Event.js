function Event() {
  const handleClick = () => {
    alert("함수형 컴포넌트");
  };

  const handleClick2 = (e, str) => {
    console.log(e);
    alert(str);
  };

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={(e) => handleClick2(e, "함수형 컴포넌트 2번")}>
        클릭2
      </button>
    </>
  );
}

export default Event;
