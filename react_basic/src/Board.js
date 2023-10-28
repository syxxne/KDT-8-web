import { Component } from "react";

let lists = [];
let count = 1;

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      writer: "",
      title: "",
    };

    // 바인딩
    this.handleCreate = this.handleCreate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCreate() {
    this.setState({
      number: count,
      writer: document.getElementById("writer").value,
      title: document.getElementById("title").value,
    });

    console.log(this.state.number, this.state.title);
  }

  handleSearch() {}

  handleSelect(e) {
    console.log(e.target.value);
    this.setState({ number: 0, writer: e.target.value });
  }

  handleTotal() {}

  render() {
    if (this.state.number !== 0) {
      lists.push({
        number: this.state.number,
        writer: this.state.writer,
        title: this.state.title,
      });

      count += 1;
    }
    console.log(lists);

    let newLists = lists.filter((list) => list.writer == this.state.writer);
    return (
      <>
        <fieldset>
          <label>작성자 : </label>
          <input style={{ marginRight: "30px" }} id="writer"></input>
          <label>제목 : </label>
          <input style={{ marginRight: "30px" }} id="title"></input>
          <button onClick={this.handleCreate}>작성</button>
        </fieldset>
        <br />
        <select
          name="작성자"
          style={{ marginRight: "30px" }}
          onChange={this.handleSelect}
        >
          <option value={"작성자"}>작성자</option>
          {lists.map((value) => (
            <option key={value.number} value={value.writer}>
              {value.writer}
            </option>
          ))}
        </select>
        <input style={{ marginRight: "30px" }}></input>
        <button onClick={this.handleSearch}>검색</button>
        <button onClick={this.handleTotal}>전체</button>
        <br />
        <table
          style={{
            border: "1px solid black",
            width: "530px",
            textAlign: "center",
            marginTop: "30px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
            {newLists.length == 0 ? (
              <tr>
                <td colSpan={3}>검색 결과가 없습니다.</td>
              </tr>
            ) : (
              newLists.map((value) => (
                <tr key={value.number}>
                  <td>{value.number}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              ))
            )}
          </thead>
        </table>
      </>
    );
  }
}

export default Board;
