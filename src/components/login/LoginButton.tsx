import cls from "../../utils/cls";

interface Props {
  title: string;
  isValid?: boolean;
}

const LoginButton = ({ title, isValid }: Props) => {
  return (
    <button
      disabled={!isValid}
      className={cls(
        "w-full bg-amber-600 text-white p-1 text-lg font-bold flex justify-center items-center rounded-lg ",
        isValid ? "hover:bg-amber-500 transition-all cursor-pointer" : "opacity-40",
      )}
    >
      {title}
    </button>
  );
};
export default LoginButton;
