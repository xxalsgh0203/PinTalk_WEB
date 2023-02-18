import { accountsSlice } from './slices/accountsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { usersSlice } from './slices/usersSlice';

const store = configureStore({
  reducer: {
    userList: usersSlice.reducer,
    accountList: accountsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
