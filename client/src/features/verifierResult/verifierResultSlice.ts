import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { VerifierResponse } from '../../interfaces/VerifierResponse';

interface VerifierResultState {
  data: VerifierResponse;
  isError: boolean;
  isLoading: boolean;
}

const initialState: VerifierResultState = {
  data: {
    domains_checked: null,
    results: null,
  },
  isError: false,
  isLoading: false,
};

export const verifierResultSlice = createSlice({
  name: 'verifierResult',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<VerifierResponse>) => {
      if (action.payload) {
        state.data = action.payload;
      }
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.data = initialState.data;
    },
  },
});

export const { setData, setIsLoading, setIsError, reset } =
  verifierResultSlice.actions;

export const selectVerifierResult = (state: RootState) => ({
  isError: state.verifierResult.isError,
  isLoading: state.verifierResult.isLoading,
  data: state.verifierResult.data,
});

export default verifierResultSlice.reducer;
