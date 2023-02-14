import AdminLayout from "../../components/admin/AdminLayout";
import AccountListTable from "../../components/admin/table/AccountListTable";
import useAccount from "../../hooks/useAccount";

const AccountList = () => {
  const { accounts, PageInfo } = useAccount();

  return (
    <AdminLayout title="계좌 조회">
      <AccountListTable />
    </AdminLayout>
  );
};
export default AccountList;
