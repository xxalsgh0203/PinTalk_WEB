import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AccountListInitialState } from '../model/interface/accountList';
import { getList } from '../redux/slices/accountsSlice';
import { RootState, useAppDispatch } from '../redux/store';

const useAccount = () => {
  const dispatch = useAppDispatch();
  const accountList = useSelector<RootState, AccountListInitialState>((state) => state.accountList);

  interface ThunkArg {
    page: number;
    submitData?: any;
  }

  const accountListArgs: ThunkArg = {
    page: accountList.page,
    submitData: accountList.submitData,
  };

  useEffect(() => {
    dispatch(getList(accountListArgs));
  }, [accountList.page]);

  return {
    accounts: accountList.payload?.[0],
    loading: accountList?.loading,
    error: accountList?.error,
    PageInfo: accountList.payload?.[1],
  };
};
export default useAccount;
