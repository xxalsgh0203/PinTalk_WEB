import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoInitialState {
  payload?: any;
}

const initialState: UserInfoInitialState = {
  payload: undefined,
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    userInfo(state, action: PayloadAction<any>) {
      state.payload = { ...action.payload };
    },
  },
});

export const userInfo = userSlice.actions;
