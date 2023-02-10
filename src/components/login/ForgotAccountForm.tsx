import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useForm } from "react-hook-form";

interface Props {
  buttonTitle?: string;
}

interface ForgotAccountFormData {
  id?: string;
  password?: string;
}

const ForgotAccountForm = ({ buttonTitle }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onValid = (data: ForgotAccountFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      {buttonTitle === "id" ? (
        <div>
          <div className="flex flex-col">
            <LoginInput
              htmlFor="id"
              register={register("id", {
                required: "아이디를 입력해주세요.",
              })}
            />
            <LoginButton isValid={isValid} title="아이디 찾기" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <LoginInput
            register={register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
            htmlFor="password"
            type="password"
          />
          <LoginButton isValid={isValid} title="비밀번호 찾기" />
        </div>
      )}
    </form>
  );
};
export default ForgotAccountForm;
