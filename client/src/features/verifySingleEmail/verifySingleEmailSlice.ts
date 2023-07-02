import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@src/app/store';
import type { OneEmailRes } from '@src/interfaces/OneEmailRes';

interface VerifySingleEmailState {
  email: string;
  result: OneEmailRes | undefined;
  isError: boolean;
  isLoading: boolean;
}

const initialState: VerifySingleEmailState = {
  email: '',
  result: undefined,
  isError: false,
  isLoading: false,
};

export const verifySingleEmailSlice = createSlice({
  name: 'verifySingleEmail',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setResult(state, action: PayloadAction<OneEmailRes | undefined>) {
      state.result = action.payload;
    },
    setIsError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setEmail, setResult, setIsError, setIsLoading } =
  verifySingleEmailSlice.actions;

export const selectEmail = (state: RootState) => state.verifySingleEmail.email;
export const selectAll = (state: RootState) => state.verifySingleEmail;

export default verifySingleEmailSlice.reducer;
