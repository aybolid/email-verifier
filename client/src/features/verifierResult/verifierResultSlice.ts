import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { VerifierResponse } from '../../interfaces/VerifierResponse';

interface VerifierResultState {
  result: VerifierResponse;
  isError: boolean;
  isLoading: boolean;
}

const initialState: VerifierResultState = {
  result: {
    domains_checked: [],
    results: [],
  },
  isError: false,
  isLoading: false,
};

export const verifierResultSlice = createSlice({
  name: 'verifierResult',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<VerifierResponse>) => {
      state.result = action.payload;

      state.isError = false;
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;

      state.isError = false;
      state.result = initialState.result;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;

      state.isLoading = false;
      state.result = initialState.result;
    },
  },
});

export const { setResult, setIsLoading, setIsError } =
  verifierResultSlice.actions;

export const selectVerifierResult = (state: RootState) => ({
  isError: state.verifierResult.isError,
  isLoading: state.verifierResult.isLoading,
  result: state.verifierResult.result,
});

export default verifierResultSlice.reducer;
