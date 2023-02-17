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
              <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">예금주명</th>
              <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">계좌구분</th>
              <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">계좌별명</th>
              <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">계좌잔액</th>
              {/*<th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">Account Hists</th>*/}
              <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">계좌번호</th>
              <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">
                계좌종류
              </th>{" "}
              {/*계좌종류(‘1’:수시입출금, ‘2’:예적금, ‘6’:수익증권, ‘T’:종합계좌)*/}
              <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">대표코드</th>
              <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">점별코드</th>
              <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">
                출금(개설)기관명
              </th>
              {/*<th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">*/}
              {/*  계좌개설 일시*/}
              {/*</th>*/}
              <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">
                핀테크이용번호
              </th>
              {/*<th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">*/}
              {/*  조회서비스 동의일시*/}
              {/*</th>*/}
              <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">
                조회서비스 동의여부
              </th>
              {/*<th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">*/}
              {/*  계좌수정 일시*/}
              {/*</th>*/}
              {/*<th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">*/}
              {/*  계좌_SEQ*/}
              {/*</th>*/}
              {/*<th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">*/}
              {/*  가입날짜*/}
              {/*</th>*/}
              <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">
                개별저축은행명
              </th>
              <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">계좌상태</th>
              <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">
                출금서비스 동의여부
              </th>
              {/*<th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">*/}
              {/*  정보수정 날짜*/}
              {/*</th>*/}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {accountList?.map((account) => {
              return <UserAccounts account={account} key={account.no} />;
            })}
          </tbody>
        </table>
      </div>
      <Pagination PageInfo={PageInfo}></Pagination>
    </div>
  );
};
export default AccountListTable;
