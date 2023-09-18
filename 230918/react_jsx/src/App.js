import "./App.css";

function App() {
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];

  let newUsers = users.filter((user) => user.vip == true);

  const loading = true;

  // 위는 javascript, return 안이 jsx
  return (
    <>
      {loading && (
        <>
          {/*// jsx 최상위에는 반드시 부모 요소 필요
      <div className="wrap">
      <div className="red"></div>
      <div className="orange"></div>
      <div className="yellow"></div>
      <div className="green"></div>
      <div className="blue"></div>
      <div className="navy"></div>
      <div className="purple"></div>
  </div>*/}
          {/* return이 있을 때, {} 사용 / return이 없을 때, () 사용 
      users.map((value, index) => {
        return <div key={index}>Hello {value}</div>;
      })*/}
          {newUsers.map((value) => (
            <div key={value.id}>- {value.name}</div>
          ))}
        </>
      )}
    </>
  );
}

export default App;
