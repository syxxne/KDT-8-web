const { Student, StudentProfile, Classes } = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

// 백엔드는 거의 대부분 비동기
exports.post_student = async (req, res) => {
  try {
    const { userid, password, email, name, major, enroll } = req.body;
    const user = await Student.create(
      {
        userid,
        password,
        email,
        StudentProfile: {
          name,
          major,
          enroll,
        },
      },
      // include : 쿼리를 실행할 때, 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
      // join은 여러 테이블을 할 수 있기 때문에 include : []와 같이 배열 사용
      // 하지만 해당 관계는 1:1이므로 {include: StudentProfile}과 같이 생략 가능
      { include: [{ model: StudentProfile }] }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.post_classexports = async (req, res) => {
  try {
    const { name, room, code, teacher_name, StudentId } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      StudentId,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.get_student = async (req, res) => {
  try {
    const student = await Student.findAll({
      attributes: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }],
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};
