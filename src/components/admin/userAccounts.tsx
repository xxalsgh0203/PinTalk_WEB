import { AccountInfo } from "../../model/interface/accountList";

interface Props {
  account?: AccountInfo;
}

const UserAccounts = ({ account }: Props) => {
  // const handleNewWindow = () => {
  //   window.open(
  //     `http://localhost:3000/userMemberDetail/${account?.no}`,
  //     "_blank",
  //     `width = ${(window.screen.width * 7) / 9}, height = ${(window.screen.height * 9) / 10}`,
  //   );
  // };

  return (
    <tr
      className="bg-gray-50 hover:text-white hover:bg-pintalk-dark-brown cursor-pointer"
      // onClick={handleNewWindow}
    >
      <td className="p-3 text-sm whitespace-nowrap">{account?.holderName}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.holderType}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountAlias}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountBalance}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountNo}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountType}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.bankName}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.bankCodeStd}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.bankCodeSub}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountBalance}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.inquiryAgreeYn}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.savingsBankName}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.state}</td>
    </tr>
  );
};

export default UserAccounts;
