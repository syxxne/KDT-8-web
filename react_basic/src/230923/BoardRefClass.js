import { Component, createRef } from "react";

class BoardRefClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputWriter: "",
      inputTitle: "",
      comments: [],
      inputSearch: "", // 검색 내용
      searchType: "writer", // 검색 타입
      results: [], // 검색 결과
    };

    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.searchComment = this.searchComment.bind(this);
  }

  onChange(e) {
    this.setState({ inputWriter: e.target.value });
  }

  inputWriterValue = createRef();
  inputTitleValue = createRef();

  addComment() {
    if (this.state.inputWriter.trim().length === 0) {
      this.inputWriterValue.current.focus();
    } else if (this.state.inputTitle.trim().length === 0) {
      this.inputTitleValue.current.focus();
    } else {
      const newComment = {
        writer: this.state.inputWriter,
        title: this.state.inputTitle,
      };

      this.setState({
        comments: [...this.state.comments, newComment],
        inputTitle: "",
        inputWriter: "",
      });
    }
  }

  searchComment() {
    const searchResult = this.state.comments.filter((value) => {
      if (value[this.state.searchType].includes(this.state.inputSearch)) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ results: searchResult });
  }

  render() {
    const {
      inputWriter,
      inputTitle,
      comments,
      searchType,
      inputSearch,
      results,
    } = this.state;
    return (
      <>
        <form>
          <label htmlFor="writer">작성자 : </label>
          <input
            type="text"
            id="writer"
            ref={this.inputWriterValue}
            value={inputWriter}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="title">제목 : </label>
          <input
            type="text"
            id="title"
            ref={this.inputTitleValue}
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>

        <form>
          <select
            value={searchType}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          >
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          />
          <button type="button" onClick={this.searchComment}>
            검색
          </button>
        </form>

        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>검색 결과</h4>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {results.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default BoardRefClass;
