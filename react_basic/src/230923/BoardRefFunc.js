import { useState, useRef } from "react";

export default function BoardRefFunc() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comments, setComments] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchType, setSearchType] = useState("writer");
  const [results, setResults] = useState([]);

  const inputWriterRef = useRef();
  const inputTitleRef = useRef();

  const addComment = () => {
    if (inputWriter.trim().length === 0) {
      inputWriterRef.current.focus();
    } else if (inputTitle.trim().length === 0) {
      inputTitleRef.current.focus();
    } else {
      const newComment = { writer: inputWriter, title: inputTitle };

      setComments(
        [...comments, newComment],
        setInputTitle(""),
        setInputWriter("")
      );
    }
  };

  const searchComment = () => {
    const searchResult = comments.filter((value) => {
      if (value[searchType].includes(inputSearch)) {
        return true;
      } else {
        return false;
      }
    });

    setResults(searchResult);
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자 : </label>
        <input
          type="text"
          id="writer"
          ref={inputWriterRef}
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          id="title"
          ref={inputTitleRef}
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
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
