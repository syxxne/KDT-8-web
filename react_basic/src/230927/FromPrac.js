import { useForm } from "react-hook-form";

export default function FormPrac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("hi", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
          placeholder="username"
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          {...register("age", {
            validate: {
              ageValid: (value) => {
                return value >= 0 || "0 이상의 숫자만 입력 가능합니다.";
              },
            },
          })}
          placeholder="age"
        />
        {errors.age?.message}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
