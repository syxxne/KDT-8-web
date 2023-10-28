import { useState } from "react";

export default function ToDo() {
  const [inputContent, setInputContent] = useState("");
  const [lists, setLists] = useState([]);
  const [done, setDone] = useState([]);

  const addList = () => {
    if (lists.length >= 10) {
      alert("할 일이 너무 많아요!");
    }

    const newList = [inputContent];
    setLists([...lists, newList], setInputContent(""));
  };

  const changeHandler = (checked, value) => {
    if (checked) {
      setDone([...done, value]);
    } else {
      setDone(done.filter((elem) => elem != value));
    }
  };

  const deleteList = () => {
    // let tempDone = [].concat(...done);
    // console.log(tempDone);

    for (let i = 0; i < done.length; i++) {
      console.log(done);
      setLists(
        lists.filter((value) => {
          if (value !== done[i]) {
            return true;
          } else {
            console.log(done[i]);
            return false;
          }
        })
      );

      console.log(lists);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          id="content"
          placeholder="할 일 입력..."
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        <button type="button" onClick={addList}>
          추가
        </button>
      </form>

      <ul>
        {lists.map((value, index) => {
          return (
            <>
              <li key={index}>
                <input
                  type="checkbox"
                  id="done"
                  value={value}
                  onChange={(e) => changeHandler(e.target.checked, value)}
                  checked={done.includes(value) ? true : false}
                />
                <label htmlFor="list">{value}</label>
              </li>
            </>
          );
        })}
      </ul>

      <button type="button" onClick={deleteList}>
        완료된 할 일 삭제
      </button>
    </>
  );
}
