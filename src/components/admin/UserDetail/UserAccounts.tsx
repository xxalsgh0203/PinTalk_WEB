import Sidebar from "./Sidebar";
import searchIcon from "../../../asset/functionIcon/search.png";
import PinBankLogo from "../../../asset/pinbank_icon.png";

const UserAccounts = () => {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="flex ml-6 mt-6">
          <img className="object-contain h-7 pr-1 w-7 flex" src={searchIcon}></img>
          <h1 className="text-kukmin-dark-brown font-bold text-xl">계좌조회</h1>
        </div>
        {/*<hr className="h-0.5 my-8 bg-pintalk-dark-brown border-0 ml-6 w-[80%]" />*/}
      </div>
    </>
  );
};

export default UserAccounts;
