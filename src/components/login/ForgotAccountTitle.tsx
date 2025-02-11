import React from "react";
import { useNavigate } from "react-router-dom";
import cls from "../../utils/cls";

interface Props {
  handleTitle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonTitle?: string;
}

const forgotAccountTitles = [
  {
    title: "아이디",
    id: "id",
  },
  {
    title: "비밀번호",
    id: "password",
  },
];

const ForgotAccountTitle = ({ handleTitle, buttonTitle }: Props) => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between w-[30rem] h-10">
      <div className="h-full">
        {forgotAccountTitles.map((item) => (
          <button
            key={item.id}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleTitle(e)}
            className={cls(
              "h-full w-20  bg-pintalk-dark-yellow transition-all",
              item.id === buttonTitle
                ? " text-white font-bold"
                : "opacity-50 text-white text-opacity-90",
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
      <button
        onClick={onLogin}
        className="bg-pintalk-light-yellow  h-full p-2 flex justify-center items-center text-white font-bold hover:bg-pintalk-dark-yellow transition-all"
      >
        로그인
      </button>
    </div>
  );
};
export default ForgotAccountTitle;
