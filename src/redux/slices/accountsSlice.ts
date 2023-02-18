import axios, { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import HttpError from '../../service/httpError';
import { UserFilteringData } from '../../model/interface/userList';
import { AccountListInitialState, AccountListPayload } from '../../model/interface/accountList';

interface ThunkArg {
  page: number;
  submitData?: UserFilteringData;
}

export const getList = createAsyncThunk<AccountListPayload, ThunkArg>(
  'account/GET_LIST',
  async ({ page = 0, submitData }, thunkAPI: any) => {
    try {
      const response = await (
        await axios.get('/accountList', {
          params: {
            page,
          },
        })
      ).data;
      return response;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        const errorMessage = thunkAPI.rejectWithValue({ errorMessage: response.data });
        const statusCode = thunkAPI.rejectWithValue(response.data).payload.status;
        throw new HttpError(statusCode, errorMessage).errorMessage;
      } else {
        console.error('Unknown Error');
      }
    }
  },
);

const initialState: AccountListInitialState = {
  payload: undefined,
  submitData: undefined,
  loading: false,
  error: undefined,
  page: 0,
};

export const accountsSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    handlePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    handleSubmit(state, action: PayloadAction<any>) {
      state.submitData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action: PayloadAction<AccountListPayload>) => {
      state.loading = false;
      state.payload = action.payload;
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
