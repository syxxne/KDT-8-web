import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("hi", data);
  };

  //   const onInvalid = (error) => {
  //     console.log("err", error);
  //   };

  // console.log(watch("password"));

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요.",
            minLength: { message: "최소 2글자 이상 작성하세요.", value: 2 },
          })}
          placeholder="username"
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요.",
            validate: {
              useGmail: (value) => {
                return (
                  value.includes("gmail.com") || "gmail로만 가입 가능합니다."
                );
              },
            },
          })}
          placeholder="email"
        />
        {errors.email?.message}
        <br />
        <input type="text" {...register("password")} placeholder="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
