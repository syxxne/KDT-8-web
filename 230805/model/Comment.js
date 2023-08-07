// DB 선택하는 부분 (현재는 임시로 데이터를 넣음)
exports.commentInfos = () => {
  // SQL문이 실행됐다는 가정 하에 반환
  return [
    {
      id: 1,
      userId: "hello",
      date: "2023-08-01",
      comment: "안녕하세요~",
    },
    {
      id: 2,
      userId: "helloworld",
      date: "2023-08-03",
      comment: "반가워요~~",
    },
    {
      id: 3,
      userId: "coding",
      date: "2023-08-04",
      comment: "안녕하세요~!~!~",
    },
    {
      id: 4,
      userId: "codingon",
      date: "2023-08-05",
      comment: "반가워요~!!~!",
    },
  ];
};
