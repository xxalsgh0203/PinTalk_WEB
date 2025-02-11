import { UseFormRegisterReturn } from "react-hook-form";
import { AiFillLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import FormErrorMessage from "../FormErrorMessage";

interface Props {
  type?: string;
  label?: string;
  htmlFor?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const LoginInput = ({ type, label, htmlFor, register, errorMessage }: Props) => {
  return (
    <div className="flex flex-col space-y-1 mb-10 w-full">
      <div className="flex items-center">
        <label htmlFor={htmlFor} className="text-gray-600">
          {label}
        </label>
        {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
      </div>
      <div className="relative">
        <input
          {...register}
          id={htmlFor}
          type={type}
          autoComplete="current-password"
          placeholder={type === "password" ? "비밀번호를 입력해주세요." : "아이디를 입력해주세요."}
          className="border-b-[1px] border-amber-600 w-full placeholder:text-sm pl-8 p-1 focus:border-b-[1px] focus:border-amber-400 transition-all"
        />
        <div className="absolute top-0 bottom-0 m-auto flex justify-center items-center text-amber-500">
          {type === "password" ? <AiFillLock size={23} /> : <FaUserAlt size={20} />}
        </div>
      </div>
    </div>
  );
};
export default LoginInput;
