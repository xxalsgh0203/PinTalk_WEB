import AccountFilteringTable from "../filtering/AccountFilteringTable";
import useAccount from "../../../hooks/useAccount";
import Pagination from "../Pagination";
import UserAccounts from "../userAccounts";
const AccountListTable = () => {
  const { accounts: accountList, error, PageInfo, loading } = useAccount();

  console.log(accountList);

  return (
    <div>
      <AccountFilteringTable />
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-white ">
            <tr>
              <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">고유번호</th>
              <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">성별</th>
              <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">이름</th>
              <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">
                주민등록번호
              </th>
              <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">전화번호</th>
              <th className="w-48 p-3 text-sm font-semi-bold tracking-wide text-left">주소</th>
              <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">이메일</th>
              <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">가입일자</th>
              <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">
                정보변경일자
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/*{accountList?.map((account) => {*/}
            {/*  return <UserAccounts account={account} key={account.no} />;*/}
            {/*})}*/}
          </tbody>
        </table>
      </div>
      <Pagination PageInfo={PageInfo}></Pagination>
    </div>
  );
};
export default AccountListTable;
