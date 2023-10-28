import styled from "styled-components";

const _BoxOne = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

const _BoxTwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

const _CircleOne = styled(_BoxTwo)`
  border-radius: 50%;
`;

// 기존 태그를 이름만 바꿔서 사용 : as 키워드 사용
const _Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;

const _Input = styled.input.attrs({ required: true });

const _BoxThree = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  line-height: 100px;
  text-align: center;

  // 다른 컴포넌트를 불러와서 사용
  ${_Input} {
    background-color: yellow;
  }

  p {
    color: red;
    font-weight: 900;

    &:hover {
      font-size: 32px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <div>
      <_BoxThree>
        <p>Hello Styled</p>
        <_Input />
      </_BoxThree>
    </div>
  );
}
