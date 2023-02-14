import { accountSlice } from "./slices/accountSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    userList: userSlice.reducer,
    accountList: accountSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
