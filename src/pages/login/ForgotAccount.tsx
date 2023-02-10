import React, { useState } from "react";
import ForgotAccountForm from "../../components/login/ForgotAccountForm";
import ForgotAccountTitle from "../../components/login/ForgotAccountTitle";
import LoginLayout from "../../components/login/LoginLayout";
import LoginTitle from "../../components/login/LoginTitle";

const ForgotAccount = () => {
  const [buttonTitle, setButtonTittle] = useState("id");

  const handleForgotAccountTitle = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.currentTarget.innerText;
    setButtonTittle(value === "아이디" ? "id" : "password");
  };

  return (
    <LoginLayout>
      <div>
        <ForgotAccountTitle handleTitle={handleForgotAccountTitle} buttonTitle={buttonTitle} />
        <main className="w-[30rem] h-[30rem] flex flex-col items-center justify-center bg-white shadow-md rounded-b-md relative">
          <LoginTitle title={buttonTitle === "id" ? "아이디 찾기" : "비밀번호 찾기"} />
          <ForgotAccountForm buttonTitle={buttonTitle} />
        </main>
      </div>
    </LoginLayout>
  );
};
export default ForgotAccount;
