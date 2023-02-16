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

  const account_Type = account?.accountType;

  return (
    <tr
      className="bg-gray-50 hover:text-white hover:bg-pintalk-dark-brown cursor-pointer"
      // onClick={handleNewWindow}
    >
      <td className="p-3 text-sm whitespace-nowrap">{account?.holderName}</td>
      <td className="p-3 text-sm whitespace-nowrap">
        {account?.holderType === "P" ? "개인" : "법인"}
      </td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountAlias}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountBalance}</td>
      {/*<td className="p-3 text-sm whitespace-nowrap">{account?.accountHists}</td>*/}
      <td className="p-3 text-sm whitespace-nowrap">{account?.accountNo}</td>
      <td className="p-3 text-sm whitespace-nowrap">
        {
          {
            "1": "수시입출금",
            "2": "예적금",
            "6": "수익증권",
            T: "종합계좌",
          }[account_Type!]
        }
      </td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.bankCodeStd}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.bankCodeSub}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.bankName}</td>
      {/*<td className="p-3 text-sm whitespace-nowrap">{account?.createDt}</td>*/}
      <td className="p-3 text-sm whitespace-nowrap">{account?.finTechUseNum}</td>
      {/*<td className="p-3 text-sm whitespace-nowrap">{account?.inquiryAgreeDt}</td>*/}
      <td className="p-3 text-sm whitespace-nowrap">{account?.inquiryAgreeYn}</td>
      {/*<td className="p-3 text-sm whitespace-nowrap">{account?.modifyDt}</td>*/}
      {/*<td className="p-3 text-sm whitespace-nowrap">{account?.no}</td>*/}
      {/*<td className="p-3 text-sm whitespace-nowrap">{account?.reg_Date}</td>*/}
      <td className="p-3 text-sm whitespace-nowrap">{account?.savingsBankName}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.state}</td>
      <td className="p-3 text-sm whitespace-nowrap">{account?.transferAgree_yn}</td>
      {/*<td className="p-3 text-sm whitespace-nowrap">{account?.update_Date}</td>*/}
    </tr>
  );
};

export default UserAccounts;
