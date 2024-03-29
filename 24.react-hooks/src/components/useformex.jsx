import { useForm } from "react-hook-form";
export default function FormPrac() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("name invalid message", errors.username?.message);
  console.log("age invalid message", errors.age?.message);
  const onValid = (data) => {
    console.log("valid", data);
    // data = {username:'~~'}
    // axios 요청
  };
  const onInvalid = (data) => {
    console.log("invalid", data);
    console.log(data.username?.message);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수항목입니다.",
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="나이"
          {...register("age", {
            validate: {
              isNum: (value) => {
                const age = Number(value);
                if (!age && age != 0) {
                  return "0이상의 숫자만 입력 가능합니다.";
                }
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}