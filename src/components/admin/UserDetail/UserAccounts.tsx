import Sidebar from "./Sidebar";

const UserAccounts = () => {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <h1 className="py-5 text-2xl text-pintalk-dark-brown text-semibold">
          님의 계좌 정보입니다
        </h1>
      </div>
    </>
  );
};

export default UserAccounts;
