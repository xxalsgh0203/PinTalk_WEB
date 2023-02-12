import Sidebar from "./Sidebar";
import searchIcon from "../../../asset/functionIcon/search.png";
import PinBankLogo from "../../../asset/pinbank_icon.png";

const UserAccounts = () => {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="pl-6 pr-6 pt-6 mb-12 w-full">
          <div className="flex">
            <img className="object-contain h-10 pr-2 w-10 flex" src={searchIcon}></img>
            <h1 className="text-2xl py-1 pl-1 text-pintalk-dark-brown text-semibold">
              회원 상세 정보
            </h1>
          </div>
          <hr className="w-full h-0.5 bg-pintalk-dark-brown border-0 rounded my-10" />

          <select className="mt-12">
            <option key="banana" value="bank">
              전체은행
            </option>
            <option key="apple" value="우리은행">
              우리은행
            </option>
            <option key="orange" value="신한은행">
              신한은행
            </option>
          </select>

          <div className="grid gap-8 space-x-1 lg:grid-cols-3 mt-5">
            <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <div className="">
                <h3 className="text-2xl text-center text-gray-800">은행이름</h3>
                <h3 className="text-2xl text-center text-gray-800">계좌번호1</h3>
                <h3 className="text-2xl text-center text-gray-800">계좌잔액</h3>
              </div>
              <div className="">
                <h3 className="text-2xl text-center text-gray-800">계좌상태</h3>
                <h3 className="text-2xl text-center text-gray-800">계좌종류</h3>
                <p className="text-center text-gray-500">view</p>
              </div>
            </div>
            <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 className="text-2xl text-center text-gray-800">계좌번호2</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌잔액</h3>
              <h3 className="text-2xl text-center text-gray-800">은행이름</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌상태</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌종류</h3>
              <p className="text-center text-gray-500">view</p>
            </div>
            <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 className="text-2xl text-center text-gray-800">계좌번호3</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌잔액</h3>
              <h3 className="text-2xl text-center text-gray-800">은행이름</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌상태</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌종류</h3>
              <p className="text-center text-gray-500">view </p>
            </div>
            <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 className="text-2xl text-center text-gray-800">계좌번호4</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌잔액</h3>
              <h3 className="text-2xl text-center text-gray-800">은행이름</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌상태</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌종류</h3>
              <p className="text-center text-gray-500">view</p>
            </div>
            <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 className="text-2xl text-center text-gray-800">계좌번호5</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌잔액</h3>
              <h3 className="text-2xl text-center text-gray-800">은행이름</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌상태</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌종류</h3>
              <p className="text-center text-gray-500">view</p>
            </div>
            <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 className="text-2xl text-center text-gray-800">계좌번호6</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌잔액</h3>
              <h3 className="text-2xl text-center text-gray-800">은행이름</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌상태</h3>
              <h3 className="text-2xl text-center text-gray-800">계좌종류</h3>
              <p className="text-center text-gray-500">view</p>
            </div>
          </div>
        </div>
        {/*<hr className="h-0.5 my-8 bg-pintalk-dark-brown border-0 ml-6 w-[80%]" />*/}
      </div>
    </>
  );
};

export default UserAccounts;
